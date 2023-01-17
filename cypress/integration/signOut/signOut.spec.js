import {When, Then} from "cypress-cucumber-preprocessor/steps"
import "cypress-localstorage-commands"
import youPage from "../../pages/client/you/you.page"
import landingPage from '../../pages/client/landing.page'

Then('I redirected to landing page', () => {
    cy.get(landingPage.MainTitle).should('be.visible')
})

When('I click "Sing out" link-button', () => {
    cy.get(youPage.SignOutButton).click()
}) 