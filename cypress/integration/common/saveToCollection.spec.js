import {When, Then} from "cypress-cucumber-preprocessor/steps"
import collectionsPage from "../../pages/client/collections.page"
import searchResultPage from "../../pages/client/searchResult.page"
import propertyDetailsPage from "../../pages/client/propertyDetails.page"
import "cypress-localstorage-commands"

Then('I see 1 collection at Collections page', () => {
    cy.get(collectionsPage.CollectionName).should('be.visible')
})

When('I click on heart icon on 2nd property card at Search Results page', () => {
    cy.get(searchResultPage.SecondHeartIcon).click()
})

Then('I see 1 checked collection at Save to Collections modal', () => {
    cy.get(searchResultPage.SaveToCollectionModal.CheckboxChecked).should('be.visible')
})

When('I click on Create New Collection button', () => {
    cy.get(searchResultPage.SaveToCollectionModal.CreateNewCollectionButton).click()
})

When('I click on Save button at Save to Collections modal', () => {
    cy.get(searchResultPage.SaveToCollectionModal.SaveButton).click()
})

When('I enter {string} collection name', (collectionName) => {
    cy.get(searchResultPage.SaveToCollectionModal.CollectionNameInput).type(collectionName)
})

When('I click on checkbox by new collection name', () => {
    cy.get(searchResultPage.SaveToCollectionModal.NewCollectionCheckbox).click()
})

Then('I click on Save button', () => {
    cy.get(searchResultPage.AddNotesModal.SaveButton).click()
})

Then('I redirected on Property details page in new browser tab', () => {
    cy.get(propertyDetailsPage.PropertyDetailsRoute).should('be.visible')
})

When('I click on Save button at Property Details page', () => {
    cy.get(propertyDetailsPage.SaveButton).click()
})

When('I select {string} collection at Save to Collections modal screen', (collectionName) => {
    cy.get(searchResultPage.SaveToCollectionModal.Checkbox).contains(collectionName).parent().click()
})

When('I click on Save button at Save to Collections modal screen', () => {
    cy.get(searchResultPage.SaveToCollectionModal.SaveButton).click()
})

Then('I see {string} title at Save to Collections Success modal screen', (modalTitle) => {
    cy.get(searchResultPage.SavedTocollectionSuccessModal.PropertySavedTitle).should('be.visible').and('have.text', modalTitle)
})

Then('I see {string} success message at Save to Collections Success modal screen', (message) => {
    cy.get(searchResultPage.SavedTocollectionSuccessModal.SuccessMessage).should('be.visible').and('have.text', message)
})

Then('I see {string} feedback title at Save to Collections Success modal screen', (feedbackTitle) => {
    cy.get(searchResultPage.SavedTocollectionSuccessModal.FeedbackTitle).should('be.visible').and('have.text', feedbackTitle)
})

Then('I see {string} feedback subtitle at Save to Collections Success modal screen', (feedbackSubtitle) => {
    cy.get(searchResultPage.SavedTocollectionSuccessModal.FeedbackSubtitle).should('be.visible').and('have.text', feedbackSubtitle)
})

Then('I see Add Notes button at Save to Collections Success modal screen', () => {
    cy.get(searchResultPage.SavedTocollectionSuccessModal.AddNotesButton).should('be.visible')
})

Then('I see Maybe Later button at Save to Collections Success modal screen', () => {
    cy.get(searchResultPage.SavedTocollectionSuccessModal.MaybeLaterButton).should('be.visible')
})

Then('I click on heart icon on 1st property card at Search Results page', () => {
    cy.get(searchResultPage.FirstHeartIcon).click()
})

When('I click on Maybe Later button on Collections Success modal screen', () => {
    cy.get(searchResultPage.SavedTocollectionSuccessModal.MaybeLaterButton).click()
})

When('I click on the checkbox for {string} collection', (collectionName) => {
    cy.get(searchResultPage.SaveToCollectionModal.Checkbox).contains(collectionName).click()
})

Then('I click on Maybe Later button at Property Saved modal', () => {
    cy.get(searchResultPage.SavedTocollectionSuccessModal.MaybeLaterButton).click()
})