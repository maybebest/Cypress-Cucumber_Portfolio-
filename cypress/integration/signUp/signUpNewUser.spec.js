import {When, Then} from "cypress-cucumber-preprocessor/steps"
import signUpModal from "../../pages/client/signUpModal.page"
import headerPanel from "../../pages/client/headerPanel.page"
import {generateUniqueEmail} from "../../support/utility"
import * as registrationData from "../../fixtures/RegistrationData.json"

const emailForExistingUser = generateUniqueEmail()

When('I click on the "Sign Up" button in header', () => {
    cy.get(headerPanel.SignUpButton).click()
})

When('I enter {string} first name', (firstName) => {
    cy.get(signUpModal.FirstName).clear().type(firstName)
})

When('I enter {string} last name', (lastName) => {
    cy.get(signUpModal.LastName).clear().type(lastName)
})

When('I enter {string} email address', (email) => {
    cy.get(signUpModal.Email).clear().type(email)
})

When('I enter {string} password', (password) => {
    cy.get(signUpModal.Password).clear().type(password)
})

When('I clear "First name" field', () => {
    cy.get(signUpModal.FirstName).clear()
})

When('I clear "Last name" field', () => {
    cy.get(signUpModal.LastName).clear()
})

When('I clear "Email" field', () => {
    cy.get(signUpModal.Email).clear()
})

When('I clear "Password" field', () => {
    cy.get(signUpModal.Password).clear()
})

When('I enter random valid email address', () => {
    cy.get(signUpModal.Email).type(generateUniqueEmail())
})

When('I activate the checkbox for Terms of Use and Privacy Policy Consent', () => {
    cy.get(signUpModal.AcceptTermsCheckbox).click()
})

When('I click the "Sign up" button in modal', () => {
    cy.get(signUpModal.SingUpButton).click()
})

When('I enter an existing email address', () => {
    cy.registerClientUserThroughAPI(emailForExistingUser, registrationData.Password, registrationData.FirstName, registrationData.LastName)
    cy.get(signUpModal.Email).type(emailForExistingUser)
})