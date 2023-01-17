import {When, Then} from "cypress-cucumber-preprocessor/steps"
import HeaderPanel from "../../pages/client/headerPanel.page"
import LoginModal from "../../pages/client/loginModal.page"
import LandingPage from "../../pages/client/landing.page"

When('I click on "Log In" button in header panel', () => {
    cy.get(HeaderPanel.LogInButton).click()
})

Then('I successfully logs in', () => {
    cy.get(HeaderPanel.UserAvatar).should('be.visible')
})

Then('I\'m redirected to the Home page', () => {
    cy.get(LandingPage.MainTitle).should('be.visible')
})