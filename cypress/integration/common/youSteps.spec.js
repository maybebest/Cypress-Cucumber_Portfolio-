import {When, Then} from "cypress-cucumber-preprocessor/steps";
import UserMenu from "../../pages/client/userMenu.page";
import YouPage from "../../pages/client/you/you.page";
import * as registrationData from "../../fixtures/RegistrationData.json";
import HeaderPanel from "../../pages/client/headerPanel.page";
import LandingPage from "../../pages/client/landing.page";

When('I select History tab', () => {
    cy.get(UserMenu.HistoryLink).click()
})

Then('I check you page tab links are visible', () => {
    cy.get(YouPage.HistoryTabLink).should('be.visible')
    cy.get(YouPage.YourAccountTabLink).should('be.visible')
    cy.get(YouPage.CoBuyerTabLink).should('be.visible')
    cy.get(YouPage.BetaFeaturesTabLink).should('be.visible')
    cy.get(YouPage.SignOutButton).should('be.visible')
})

Then('I verify users first name and last name visible', () => {
    cy.get(`${YouPage.UserAvatar}:contains(${registrationData.FirstName + ' ' + registrationData.LastName})`)
})

Given('I am on "Your Account" page Edit Profile tab', () => {
    cy.get(HeaderPanel.UserAvatar).click()
    cy.get(LandingPage.UserMenu.YourAccountLink).click()
})

Then('I refresh the current page', () => {
    cy.reload()
})