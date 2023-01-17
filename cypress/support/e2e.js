import './commands'

require('cypress-grep')()
require('@shelex/cypress-allure-plugin');
import * as agentData from "../fixtures/AgentData.json";


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

before(() => {
    cy.log(`[Agent domain did not grabbed yet, grabbing it...]()`)
    cy.request('POST', Cypress.env("commandLoginGraphQLUrl"), {
        username: agentData.Login,
        password: agentData.Password
    }).then(
        (response) => {
            cy.request({
                method: 'GET',
                url: Cypress.env("commandAgentDomainGraphQLUrl"),
                headers: {
                    "authorization": 'Bearer ' + response.body.access_token,
                },
            })
                .its('body')
                .then(body => {
                    Cypress.env('agentSiteUrl', `${body.data.name}.consumer-qa.kw.com`)
                    cy.log(`[Agent domain successfully grabbed, domain is - "${body.data.name}.consumer-qa.kw.com/"]()`)
                })
        }
    )
})
