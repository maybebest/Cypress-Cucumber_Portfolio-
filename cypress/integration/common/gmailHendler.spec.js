import registrationData from "../../fixtures/RegistrationData.json"
import {FileHandler} from "../../support/utility"
import {path} from "../../support/filePath"

When('I register account with gmail', () => {
    const test_id = new Date().getTime()
    const firstName = registrationData.FirstName + test_id
    const lastName = registrationData.LastName + test_id
    const incoming_mailbox = `qa.kw.test.inbox+${test_id}@gmail.com`
    cy.registerClientUserThroughAPI(incoming_mailbox, registrationData.Password, firstName, lastName)
    new FileHandler(path["gmail"]).write({"inbox": incoming_mailbox, "firstName": firstName, "lastName": lastName})
})

Then('I receive {string} sign up confirmation email', (subjectText) => {
    cy.wait(5000)
    new FileHandler(path["gmail"]).read().then((gmail) => {
        cy
            .task("gmail:check", {
                from: "Keller Williams no-reply@system-qa.kw.com",
                receiver: gmail.inbox
            })
            .then(email => {
                expect(email[0].subject).to.eq(subjectText + gmail.firstName + " " + gmail.lastName)
            })
    })
})

Then('I receive {string} invitation email with collection name and open collection link', (subjectText) => {
    cy.wait(5000)
    new FileHandler(path["gmail"]).read().then((gmail) => {
        cy.task("gmail:check", {
            from: "Keller Williams",
            receiver: gmail.inbox
        })
            .then(emails => {
                expect(emails[0].subject).to.eq(subjectText)
                expect(emails[0].receiver).to.eq(gmail.inbox)
            })

        cy.task("gmail:get-messages", {
            options: {
                from: "Keller Williams",
                receiver: gmail.inbox,
                subject: subjectText,
                include_body: true
            }
        }).then(emails => {
            assert.isAtLeast(
                emails.length,
                1,
                "Expected to find at least one email, but none were found!"
            )
            const body = emails[0].body.html
            assert.isTrue(
                body.indexOf(
                    "TestFirstName's Favorites"
                ) >= 0,
                "Found collection name"
            )
            assert.isTrue(
                body.indexOf(
                    "https://email.system-qa.kw.com/"
                ) >= 0,
                "Found reset link!"
            )
        })
    })
})