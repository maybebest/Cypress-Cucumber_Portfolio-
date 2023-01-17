import {Then, When} from "cypress-cucumber-preprocessor/steps";
import SimpleModal from "../../pages/simpleModal.page";
import SimpleModalPage from "../../pages/simpleModal.page";

When('I click "Dismiss" button at info modal', () => {
    cy.get(SimpleModal.DismissButton).click()
    cy.get(SimpleModal.Root).should('not.exist')
})

Then('I see {string} info modal title', (modalTitle) => {
    cy.get(SimpleModalPage.SimpleModalTitle).should('have.text', modalTitle).and('be.visible')
})

Then('I see {string} info modal subtitle', (modalTitle) => {
    cy.get(SimpleModalPage.SimpleModalSubTitle).should('have.text', modalTitle).and('be.visible')
})
