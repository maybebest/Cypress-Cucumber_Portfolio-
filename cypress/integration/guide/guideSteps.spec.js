import {When} from "cypress-cucumber-preprocessor/steps";
import HeaderPanel from "../../pages/client/headerPanel.page";
import * as data from "../../fixtures/GuidePage.json";
import GuidePage from "../../pages/client/guide.page";
import FindAgentPage from "../../pages/client/findAgent.page";

When('I click on "Guide" option', () => {
    cy.get(HeaderPanel.GuideButtonLink).click()
})

When('I open {string} tab', (tabName) => {
    cy.contains(GuidePage.TabSwitcher, tabName).click()
})

Then('I should see a Buying tab intro', () => {
    cy.get(GuidePage.BuyingTab.Title).should('contain', data.BuyingTab.TabTitle)
    cy.get(GuidePage.BuyingTab.Description).should('contain', data.BuyingTab.TabDescription)
    cy.get(GuidePage.BuyingTab.GetStartedButton).should('be.visible')
})

Then('I should see a Selling tab intro', () => {
    cy.get(GuidePage.SellingTab.Title).should('contain', data.SellingTab.TabTitle)
    cy.get(GuidePage.SellingTab.Description).should('contain', data.SellingTab.TabDescription)
    cy.get(GuidePage.SellingTab.GetStartedButton).should('be.visible')
})

Then('I see a Title: {string}', (title) => {
    cy.get(GuidePage.SellingTab.GuideTitle).should('be.visible').and('have.text', title)
})

When('I opens "Selling" tab as an unauthorized user', () => {
    cy.get(GuidePage.SellingTabUnAuth).click()
})

Then('I see a Description at Guide page on Buying tab', () => {
    cy.get(GuidePage.BuyingTab.TitleUnAuth).should('contain', data.UnAuth.BuyingTab.TabTitle)
    cy.get(GuidePage.BuyingTab.DescriptionUnAuth).should('contain', data.UnAuth.BuyingTab.TabDescription)
})

Then('I see a Description at Guide page on Selling tab', () => {
    cy.get(GuidePage.SellingTab.TitleUnAuth).should('contain', data.UnAuth.SellingTab.TabTitle)
    cy.get(GuidePage.SellingTab.DescriptionUnAuth).should('contain', data.UnAuth.SellingTab.TabDescription)
})

Then('I see "Find an Agent" button', () => {
    cy.get(GuidePage.FindAnAgent).should('be.visible')
})

When('I click on "Find an Agent" button at Guide page', () => {
    cy.get(GuidePage.FindAnAgent).click()
})

Then('I should be navigated on Find an Agent page', () => {
    cy.get(FindAgentPage.FindAgentTitle).should('be.visible')
})

When('I open "Selling" tab at Guide page', () => {
    cy.get(GuidePage.SellingStep.Selling).click()
})

When('I open "Buying" tab at Guide page', () => {
    cy.get(GuidePage.BuyingStep.Buying).click()
})

When('I click on Selling', (step) => {
    cy.get(GuidePage.GuideStep).contains(step).click()
})

Then('I see "Find an Agent" button on each Guide step', () => {
    cy.get(GuidePage.GuideStep).each((item, index) => {
        cy.wrap(item).click(index);
        cy.get(GuidePage.FindAnAgent).should('be.visible')
    })
})

When('I click on {string} step at Guide Buying page', (stepTitle) => {
    cy.contains(GuidePage.GuideStep, stepTitle).click()
})

When('I click on "Mark step as Completed" button', () => {
    cy.get(GuidePage.MarkStepAsCompleteButton).click()
})

Then('I see {string} step marked as completed', (stepTitle) => {
    cy.contains(GuidePage.GuideStep, stepTitle).find(GuidePage.GuideStepCheckBox).should('have.attr', 'aria-checked', 'true')
})

When('I click on "Mark step as Completed" button', () => {
    cy.get(GuidePage.MarkStepAsCompleteButton).click()
})