import {Given} from "cypress-cucumber-preprocessor/steps"
import "cypress-localstorage-commands"
import {FileHandler} from "../../support/utility"
import {path} from "../../support/filePath"

Given('I claim agent as {string} user via GraphQL', (userEmail) => {
    new FileHandler(path[userEmail]).read().then((savedEmail) => {
        cy.claimAgent(savedEmail)
    })
})


