import {When, Then} from "cypress-cucumber-preprocessor/steps"
import {FileHandler, generateUniqueEmail} from "../../support/utility"
import propertyDetailsPage from "../../pages/client/propertyDetails.page"
import "cypress-localstorage-commands"
import loginPage from "../../pages/agent/loginModal.page"
import * as agentData from "../../fixtures/AgentData.json"
import * as formData from "../../fixtures/FormData.json"
import * as registrationData from "../../fixtures/RegistrationData.json"
import landingPage from "../../pages/agent/landing.page"
import loginModalPage from "../../pages/agent/loginModal.page"
import contactsPage from "../../pages/agent/contacts.page"
import contactsDetailsPage from "../../pages/agent/contactDetails.page"
import {path} from "../../support/filePath"

const formEmail = generateUniqueEmail()

When('I open ask your agent form', () => {
    cy.get(propertyDetailsPage.AskYourAgentButton).click()
})

When('I fill in "Ask Your Agent" form with valid user data', () => {
    cy.get(propertyDetailsPage.AskYourAgentForm.FirstName).type(formData.FirstName)
    cy.get(propertyDetailsPage.AskYourAgentForm.LastName).type(formData.LastName)
    cy.get(propertyDetailsPage.AskYourAgentForm.Email).type(formEmail)
})

When('I fill in "Ask Your Agent" form with {string} message', (message) => {
    cy.get(propertyDetailsPage.AskYourAgentForm.Message).type(message)
})

When('I click submit "Ask Your Agent" form button', () => {
    cy.get(propertyDetailsPage.AskYourAgentForm.SubmitButton).click()
})

When('I select contact with email specified in form', () => {
    cy.get(contactsPage.SearchInput).type(formEmail)
    cy.get(contactsPage.SwitchToPersonalLink).click({force: true})
    cy.get(contactsPage.ContactDetails).click()
})

When('I fill in "Interested? Let\'s Talk!" form wih valid user data', () => {
    cy.get(propertyDetailsPage.AgentContactsSection.FirstName).type(formData.FirstName)
    cy.get(propertyDetailsPage.AgentContactsSection.LastName).type(formData.LastName)
    cy.get(propertyDetailsPage.AgentContactsSection.Email).type(formEmail)
})

When('I fill in "Interested? Let\'s Talk!" form with {string} message', (message) => {
    cy.get(propertyDetailsPage.AgentContactsSection.MessageTextArea).type(message)
})

Then('I see "Interested? Let\'s Talk!" form prefilled with user name and last name', () => {
    cy.get(propertyDetailsPage.AgentContactsSection.FirstName).should('have.value', registrationData.FirstName)
    cy.get(propertyDetailsPage.AgentContactsSection.LastName).should('have.value', registrationData.LastName)
})

Then('I see "Interested? Let\'s Talk!" form prefilled with {string} user', (email) => {
    new FileHandler(path[email]).read().then((savedEmail) => {
        cy.get(propertyDetailsPage.AgentContactsSection.Email).should('have.value', savedEmail)
    })
})

When('I click submit "Interested? Let\'s Talk!" form', () => {
    cy.get(propertyDetailsPage.AgentContactsSection.SendButton).click()
})

When('I log in at agent site landing page', () => {
    cy.get(landingPage.LogInButton).click()
    cy.get(loginPage.Login).type(agentData.Login)
    cy.get(loginPage.Password).type(agentData.Password)
    cy.get(loginPage.SingInButton).click()
})

Then('I redirected to agent landing page with {string} title', (title) => {
    cy.get(landingPage.MainTitle).should('be.visible').and('contain', title)
})