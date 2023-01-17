import {Then} from "cypress-cucumber-preprocessor/steps"
import singUpModal from "../../pages/client/signUpModal.page"

Then('I should see sign up modal', () => {
    cy.get(singUpModal.SignUpModal).should('be.visible')
})