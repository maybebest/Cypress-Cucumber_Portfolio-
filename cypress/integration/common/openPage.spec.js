import {Given} from "cypress-cucumber-preprocessor/steps"
import generalElementsPage from "../../pages/client/generalElements.page"
import {getUrl} from "../../support/productUrls.js"
import "cypress-localstorage-commands"
import {fakeLocation} from "../../support/utility"

When('I accept cookies', () => {
    cy.get(generalElementsPage.AcceptCookieButton).click()
    cy.clickOptionalElement(generalElementsPage.AdAcceptCookieBanner,
        generalElementsPage.AcceptCookieButton)
})

Given('I open {string} site property page', (site) => {
    if (site === 'agent') {
        cy.openFirstPropertyByCityAndState("Austin", "TX", Cypress.env('agentSiteUrl'))
    } else if (site === 'general') {
        cy.openFirstPropertyByCityAndState("Austin", "TX", Cypress.env('generalSiteUrl'))
    } else throw new Error(`Open page for ${site} site is not implemented yet`)

})

Given('I open {string} page', (site) => {
    const url = getUrl()
    cy.visit(url[site], fakeLocation(48, 2))
})
