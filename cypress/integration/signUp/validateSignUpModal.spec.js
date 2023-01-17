import {Then} from "cypress-cucumber-preprocessor/steps"
import singUpModal from "../../pages/client/signUpModal.page"

Then('I see title: {string}', (title) => {
    cy.get(singUpModal.Title).should('be.visible').and('have.text', title)
})

Then('I see sign up info image', () => {
    cy.get(singUpModal.Image).should('be.visible')
})

Then('I see eye icon to unhide password', () => {
    cy.get(singUpModal.EyeIcon).should('be.visible')
})

Then('I see Sign up button', () => {
    cy.get(singUpModal.SingUpButton).should('be.visible')
})

Then('I see have account link with {string} text', (haveAccountText) => {
    cy.get(singUpModal.AlreadyHaveAccountLink).contains(haveAccountText).should('be.visible')
})

Then('I see checkbox for accept terms of use', () => {
    cy.get(singUpModal.AcceptTermsCheckbox).should('be.visible')
})

Then('I see accept terms link with {string} text', (linkText) => {
    cy.get(singUpModal.AcceptTermsBlock).should('be.visible').and('have.text', linkText)
})

Then('I see {string} title in the form section', (title) => {
    cy.get(singUpModal.SignUpTitle).should('be.visible').and('have.text', title)
})

Then('I see agent description with {string} text', (message) => {
    cy.get(singUpModal.AgentDescription).should('be.visible').and('have.text', message)
})

Then('I see agent avatar', () => {
    cy.get(singUpModal.AgentAvatar).should('be.visible')
})

Then('I see list of info texts', ({rawTable}) => {
    rawTable.forEach((item) => {
        cy.get(singUpModal.InfoList).should('contain.text', item[0])
    });
})

Then('I see form "First name" field', () => {
    cy.get(singUpModal.FirstName).should('be.visible')
})

Then('I see form "Last name" field', () => {
    cy.get(singUpModal.LastName).should('be.visible')
})

Then('I see form "Email" field', () => {
    cy.get(singUpModal.Email).should('be.visible')
})

Then('I see form "Password" field', () => {
    cy.get(singUpModal.Password).should('be.visible')
})

Then('I see "Accept terms and Policy" checkbox {string} validation error', (errorMessage) => {
    cy.get(singUpModal.AcceptTermsBlock).find(singUpModal.ValidationError).should('have.text', errorMessage)
})

Then('I see "First name" field {string} validation error', (errorMessage) => {
    cy.get(singUpModal.FirstName).parents(singUpModal.ValidationInput).should('have.text', errorMessage)
})

Then('I see "Last name" field {string} validation error', (errorMessage) => {
    cy.get(singUpModal.LastName).parents(singUpModal.ValidationInput).should('have.text', errorMessage)
})

Then('I see "Email address" field {string} validation error', (errorMessage) => {
    cy.get(singUpModal.Email).parents(singUpModal.ValidationInput).should('have.text', errorMessage)
})

Then('I see "Password" field {string} validation error', (errorMessage) => {
    cy.get(singUpModal.Password).parents(singUpModal.ValidationInput).should('have.text', errorMessage)
})

Then('Password field has red edging', () => {
    cy.get(singUpModal.Password).should('have.css', 'background-color', 'rgb(255, 255, 255)')
})

Then('I don\'t see "Password" field {string} validation error', (errorMessage) => {
    cy.get(singUpModal.Password).parents(singUpModal.ValidationInput).should('not.have.text', errorMessage)
})

Then('Red edging isn\'t displayed', () => {
    cy.get(singUpModal.Password).should('have.css', 'background-color', 'rgb(255, 255, 255)')
})

When('I click on eye icon', () => {
    cy.get(singUpModal.EyeIcon).click()
})

Then('I see {string} password text', () => {
    cy.get(singUpModal.Password).should('have.attr', 'type', 'text')
})