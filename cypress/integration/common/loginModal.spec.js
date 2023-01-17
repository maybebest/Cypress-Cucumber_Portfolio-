import registrationData from "../../fixtures/RegistrationData.json"
import LoginModal from "../../pages/client/loginModal.page"
import {FileHandler} from "../../support/utility"
import {path} from "../../support/filePath"

When('I enter a valid email address', () => {
    new FileHandler(path["gmail"]).read().then((gmail) => {
        cy.get(LoginModal.Email).type(gmail.inbox)
    })
})

When('I enter a valid password', () => {
    cy.get(LoginModal.Password).type(registrationData.Password)
})

When('I click the "Log in" button', () => {
    cy.get(LoginModal.LogInButton).click()
})