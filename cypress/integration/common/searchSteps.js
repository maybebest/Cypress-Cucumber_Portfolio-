import {When, Then} from "cypress-cucumber-preprocessor/steps";
import landingPage from "../../pages/client/landing.page";
import searchResultPage from "../../pages/client/searchResult.page";
import findAgentPage from "../../pages/client/findAgent.page";
import savedSearchesPage from "../../pages/client/savedSearches.page";
import SearchResultPage from "../../pages/client/searchResult.page";

When('I search {string} from main search using {string} section auto-suggest', (searchRequest, section) => {
    cy.get(landingPage.SearchPropertyInput).should('be.visible')
    cy.get(landingPage.SearchPropertyInput).type(searchRequest)
    cy.get(landingPage.getSearchAutocompleteSection(section)).should('be.visible')
    cy.contains(landingPage.getSearchAutocompleteSection(section), searchRequest).click()
})

When('I open first property at search result page', () => {
    cy.openLinkInSameTab(searchResultPage.FirstPropertyCard)
    cy.get(searchResultPage.PropertyPage).should('be.visible')
})

Then('I see property cards', () => {
    cy.get(searchResultPage.PropertyCard).then($cards => {
        const cardsAmount = $cards.length
        expect(cardsAmount).to.be.greaterThan(0)
    })
})

Then('I see policy text', () => {
    cy.get(searchResultPage.PolicyText).should('be.visible')
})

Then('I see copyright text', () => {
    cy.get(searchResultPage.CopyrightText).should('be.visible')
})

Then('I see footer elements', () => {
    cy.get(searchResultPage.DBALogo).should('be.visible')
    cy.get(searchResultPage.DBAName).should('be.visible')
    cy.get(searchResultPage.DBAOffice).should('be.visible')
    cy.get(searchResultPage.TeamLogo).should('be.visible')
    cy.get(searchResultPage.TeamName).should('be.visible')
    cy.get(searchResultPage.AgentName).should('be.visible')
    cy.get(searchResultPage.AgentLicense).should('be.visible')
    cy.get(searchResultPage.SocialLinks).should('be.visible')
})

Then('I see agent cards', () => {
    cy.get(findAgentPage.AgentCard).then($cards => {
        const cardsAmount = $cards.length
        expect(cardsAmount).to.be.greaterThan(0)
    })
})

When('I create and name a saved search {string}', (name) => {
    // TODO create a saved search by api
    cy.get(searchResultPage.SaveSearchButton).click()
    if (cy.get(savedSearchesPage.SavedSearchModal.SearchNameInput).should('not.have.text', name)) {
        cy.get(savedSearchesPage.SavedSearchModal.SearchNameInput).clear().type(name)
    }
    cy.get(searchResultPage.NewSavedSearchModal.SaveButton).click()
})

When('I search {string} from saved search and select from {string} auto-suggest', (searchRequest, autoSuggest) => {
    cy.get(savedSearchesPage.SearchInput).should('be.visible').clear()
    cy.get(savedSearchesPage.SearchInput).type(searchRequest)
    cy.get(landingPage.getSearchAutocompleteSection(autoSuggest)).should('be.visible')
    cy.contains(landingPage.getSearchAutocompleteSection(autoSuggest), searchRequest).click()
})

When('I enter {string} into Search field', (searchRequest) => {
    cy.get(landingPage.SearchPropertyInput).should('be.visible')
    cy.get(landingPage.SearchPropertyInput).clear().type(searchRequest)
})

Then('I should see {int} items in search autocomplete', () => {
    cy.get(landingPage.SearchSuggest).should('not.exist')
})

Then('I should see {string} city in suggested dropdown', (autoSuggest) => {
    cy.get(landingPage.SearchSuggest).should('be.visible')
    cy.get(landingPage.SearchSuggest).contains(autoSuggest)
})

Then('I should see "For Sale" search toggle is selected', () => {
    cy.get(landingPage.ForSaleActive).should('be.visible')
})

Then('I click "For Rent" search toggle at Landing page', () => {
    cy.get(landingPage.ForRent).click()
})

Then('I should see "For Rent" toggle is active on Filters bar', () => {
    cy.get(SearchResultPage.ForRentFilter.ForRent).click()
    cy.get(SearchResultPage.ForRentFilter.ForRentToggleLabel).parents('.BooleanGroup__header').find(SearchResultPage.ForRentFilter.ToggleOn).should('be.visible')
})

Then('I should see the map on Search Results page', () => {
    cy.get(SearchResultPage.Map).should('be.visible')
})

Then('I should see shown property marker limited to {int} properties on map', (number) => {
    cy.get(SearchResultPage.PropertyMapMarker).then($marker => {
        const propertyMarker = $marker.length
        expect(propertyMarker).to.be.eq(number)
    })
})

Then('I should see shown property cards limited to {int} properties', (number) => {
    cy.get(SearchResultPage.SearchListSummery).then($el => {
        const arr = $el.text().split(' ')
        const text = +arr[1]
        expect(text).to.be.eq(number)
    })
})

Then('I click on a property card without Upcoming Open Houses label', () => {
    cy.get(SearchResultPage.PropertyWithoutOpenHouse).eq(0)
        .invoke('removeAttr', 'target')
        .click()
    cy.get(searchResultPage.PropertyPage).should('be.visible')
})