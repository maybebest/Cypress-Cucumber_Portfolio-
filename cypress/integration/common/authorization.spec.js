import {Given, When} from "cypress-cucumber-preprocessor/steps"
import "cypress-localstorage-commands"
import {FileHandler, generateUniqueEmail} from "../../support/utility"
import {path} from "../../support/filePath"
import * as registrationData from "../../fixtures/RegistrationData.json"
import loginPage from "../../pages/agent/loginModal.page";
import * as agentData from "../../fixtures/AgentData.json";


Given('I create an account and login at {string} site via GraphQL', (site) => {
    if (site === 'agent') {
        cy.createAndLoginUser(generateUniqueEmail(), Cypress.env('agentSiteUrl'))
    } else if (site === 'general') {
        cy.createAndLoginUser(generateUniqueEmail(), Cypress.env('generalSiteUrl'))
    } else throw new Error('Auth through API for this site do not implemented yet')
})

Given('I register {string} user via GraphQL', (email) => {
    new FileHandler(path[email]).write(generateUniqueEmail())
    new FileHandler(path[email]).read().then((savedEmail) => {
        cy.registerClientUserThroughAPI(savedEmail, registrationData.Password, registrationData.FirstName, registrationData.LastName)
    })
})

Given('I log in as {string} user at {string} site via GraphQL', (email, site) => {
    new FileHandler(path[email]).read().then((savedEmail) => {
        if (site === 'agent') {
            cy.authUserThoughAPI(savedEmail, registrationData.Password, Cypress.env('agentSiteUrl'))
        } else if (site === 'general') {
            cy.authUserThoughAPI(savedEmail, registrationData.Password, Cypress.env('generalSiteUrl'))
        } else throw new Error('Auth through API for this site do not implemented yet')
    })
})

When('I log in as agent', () => {
    cy.get(loginPage.Login).type(agentData.Login)
    cy.get(loginPage.Password).type(agentData.Password)
    cy.get(loginPage.SingInButton).click()
})

