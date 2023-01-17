import {When} from "cypress-cucumber-preprocessor/steps"
import HeaderPanel from "../../pages/client/headerPanel.page"

When('I click on user avatar', () => {
    cy.get(HeaderPanel.UserAvatar).click()
})

Then('I see users avatar at Header panel', () => {
    cy.get(HeaderPanel.UserAvatar).should('be.visible')
})

Then('I enter {string} search criteria at Header panel', (searchData) => {
    cy.get(HeaderPanel.SearchInput).type(searchData)
})

Then('I select {string} search data line from suggested dropdown at Header', (searchData) => {
    cy.get(HeaderPanel.SearchDataLine).contains(searchData).click()
})

When('I click on "Saved" tab', () => {
    cy.get(HeaderPanel.SavedTab).click()
})

When('I click on "Collections" or "View All" option from Saved dropdown menu', () => {
    cy.get('.KWNavigationItemDropdown__popup').should('be.visible')
    cy.get('body').then((body) => {
        if (body.find(HeaderPanel.SavedDropdown.ViewAllButton).length > 0) {
            cy.get(HeaderPanel.SavedDropdown.ViewAllButton).click()
        } else {
            cy.get(HeaderPanel.SavedDropdown.CollectionsOption).click()
        }
    })
})