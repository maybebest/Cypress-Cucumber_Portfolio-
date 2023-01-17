import {Then, When} from "cypress-cucumber-preprocessor/steps"
import contactsPage from "../../pages/agent/contacts.page";
import {FileHandler} from "../../support/utility";
import {path} from "../../support/filePath";
import contactsDetailsPage from "../../pages/agent/contactDetails.page";

Then('I see contacts page welcome message', () => {
    cy.get(contactsPage.WelcomeMessage).should('be.visible')
})

When('I select contact with {string} email', (email) => {
    new FileHandler(path[email]).read().then((savedEmail) => {
        cy.get(contactsPage.SearchInput).type(savedEmail)
        cy.get(contactsPage.SwitchToPersonalLink).click({force: true})
        cy.get(contactsPage.ContactDetails).click()
    })
})

Then('I see {string} message in timeline', (message) => {
    cy.get(contactsDetailsPage.UserComment).should('contain', message)
})

Then('I see {string} guide step completed in timeline', (step) => {
    cy.get(contactsDetailsPage.GuideStep).should('contain', step).and('contain', 'step completed')
})