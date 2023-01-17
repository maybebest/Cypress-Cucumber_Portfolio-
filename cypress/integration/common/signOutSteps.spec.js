import {Then} from "cypress-cucumber-preprocessor/steps"
import userMenu from "../../pages/client/userMenu.page"
import headerPanel from "../../pages/client/headerPanel.page"
import "cypress-localstorage-commands"

Then('I click on the "Sign out" button', () => {
    cy.get(userMenu.SingOutLink).click()
})

Then('I am logged out', () => {
    cy.get(headerPanel.UserAvatar).should('not.exist')
    cy.get(headerPanel.SignUpButton).should('be.visible')
    cy.get(headerPanel.LogInButton).should('be.visible')
})

