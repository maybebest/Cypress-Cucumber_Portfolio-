import {When, Then} from "cypress-cucumber-preprocessor/steps"
import HeaderPanel from "../../pages/client/headerPanel.page"
import LoginModal from "../../pages/client/loginModal.page"
import ClientData from "../../../cypress/fixtures/ClientData.json"
import "cypress-localstorage-commands"

When('I click on Log In button at Header panel', () => {
    cy.get(HeaderPanel.LogInButton).click()
})

When('I enter valid email', () => {
    cy.get(LoginModal.Email).clear().type(ClientData.Login)
})

When('I enter {string} password', (password) => {
    cy.get(LoginModal.Password).clear().type(password)
})

When('I click on Log in button', () => {
    cy.get(LoginModal.LogInButton).click()
})

Then('I see {string} password validation error', (errorMessage) => {
    cy.get(LoginModal.ValidationError).should('have.text', errorMessage)
})

When('I enter {string} email', (email) => {
    cy.get(LoginModal.Email).clear().type(email)
})

When('I don\'t enter email', () => {
    cy.get(LoginModal.Email).clear()
})

Then('I see {string} email validation error', (errorMessage) => {
    cy.get(LoginModal.ValidationError).should('have.text', errorMessage)
})

When('I don\'t enter password', () => {
    cy.get(LoginModal.Password).clear()
})

When('I enter valid password', () => {
    cy.get(LoginModal.Password).clear().type(ClientData.Password)
})

Then('I see {string} title', (title) => {
    cy.get(LoginModal.Title).should('be.visible').and('contain', title)
})

Then('I see {string} subtitle', (subTitle) => {
    cy.get(LoginModal.loginModalAgent.SubTitle).should('be.visible').and('contain', subTitle)
})

Then('I see Agent avatar circled with red color', (subTitle) => {
    cy.get(LoginModal.loginModalAgent.AgentAvatar).should('have.css', 'background-color', 'rgb(206, 1, 31)')
})

Then('I see Agent message {string}', (message) => {
    cy.get(LoginModal.loginModalAgent.AgentMessage).should('be.visible').and('contain', message)
})

Then('I see Email field with {string} placeholder', (placeholderText) => {
    cy.get(LoginModal.Email).should('be.visible').and('have.attr', 'placeholder', placeholderText)
})

Then('I see Password field with {string} placeholder', (placeholderText) => {
    cy.get(LoginModal.Password).should('be.visible').and('have.attr', 'placeholder', placeholderText)
})

Then('I see "eye" icon', () => {
    cy.get(LoginModal.EyeShowIcon).should('be.visible')
})

Then('I see {string} button', (labelText) => {
    cy.get(LoginModal.LogInButton).should('be.visible').and('contain', labelText)
})

Then('I see "I forgot my password" link', () => {
    cy.get(LoginModal.ForgotPasswordLink).should('be.visible')
})

Then('I see "Don’t have an account?" label', () => {
    cy.get(LoginModal.DontHaveAccountLink).should('be.visible')
})

Then('I see "Sign Up" link', () => {
    cy.get(LoginModal.SignUpLink).should('be.visible')
})