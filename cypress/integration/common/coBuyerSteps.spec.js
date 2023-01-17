import {When, Then} from "cypress-cucumber-preprocessor/steps";
import CoBuyerPage from "../../pages/client/you/cobuyer.page";
import UserMenu from "../../pages/client/userMenu.page";
import * as coBuyerData from "../../fixtures/CoBuyerData.json";
import {FileHandler} from "../../support/utility"
import {path} from "../../support/filePath";
import SimpleModalPage from "../../pages/simpleModal.page";
import * as registrationData from "../../fixtures/RegistrationData.json";


When('I click on "Co-buyer" option from dropdown', () => {
    cy.get(UserMenu.CoBuyerLink).click()
})

When('I fill out the invitation form with user data and {string} email', (email) => {
    new FileHandler(path[email]).read().then((savedEmail) => {
        cy.get(CoBuyerPage.EmailInput).type(savedEmail)
    })
    cy.get(CoBuyerPage.FirstNameInput).type(coBuyerData.Name)
    cy.get(CoBuyerPage.LastNameInput).type(coBuyerData.LastName)
})

When('I click "Invite" button', () => {
    cy.get(CoBuyerPage.InviteButton).click()
})

Then('I see that Co-buyer added', () => {
    cy.get(CoBuyerPage.CoBuyerSection).should('be.visible')
})

Then('I dont see invite co-buyer button', () => {
    cy.get(CoBuyerPage.InviteButton).should('not.exist')
})

Then('I see Co-Buyer invite status is {string}', (inviteStatus) => {
    cy.get(CoBuyerPage.PendingEmailInvite).should('have.text', inviteStatus)
})

Then('I click "Reject Invitation" button', () => {
    cy.get(CoBuyerPage.RejectInvitation).click()
})

Then('I dont see "Reject Invitation" button', () => {
    cy.get(CoBuyerPage.RejectInvitation).should('not.exist')
})

Then('I click "Accept Invitation" button', () => {
    cy.get(CoBuyerPage.AcceptInvitation).click()
})

Then('I see invitation Accepted', () => {
    cy.get(CoBuyerPage.AcceptInvitation).should('not.exist')
    cy.get(CoBuyerPage.CoBuyerProfile).should('be.visible')
})

Then('I see the two users are {string}', (linkedText) => {
    cy.get(CoBuyerPage.LinkedCobuyer).should('be.visible').and('contain', linkedText)
})

Then('I click \'Remove Co-Buyer\' button at Co-buyer tab', () => {
    cy.get(CoBuyerPage.RemoveCoBuyer).click()
})

Then('I click \'Remove\' button at modal user', () => {
    cy.get(SimpleModalPage.RemoveButton).click()
})

Then('I do not see \'Remove Co-Buyer\' button', () => {
    cy.get(CoBuyerPage.RemoveCoBuyer).should('not.exist')
})

Then('I see invite co-buyer section', () => {
    cy.get(CoBuyerPage.InviteCoBuyerSection).should('be.visible')
})

Then('I navigate back', (searchName) => {
    cy.go('back')
})

Given('I send a co-buyer invitation as {string} user to {string} user via GraphQL', (invitationSenderEmail, invitationReceiverEmail) => {
    new FileHandler(path[invitationSenderEmail]).read().then((senderEmail) => {
        new FileHandler(path[invitationReceiverEmail]).read().then((receiverEmail) => {
            cy.sendCoBuyerInvitationThroughAPI(senderEmail, receiverEmail, registrationData.FirstName, registrationData.LastName)
        })
    })
})

Given('I accept co-buyer invitation as {string} user via GraphQL', (invitationReceiverEmail) => {
    new FileHandler(path[invitationReceiverEmail]).read().then((receiverEmail) => {
        cy.acceptCoBuyerInvitationThroughAPI(receiverEmail)
    })
})