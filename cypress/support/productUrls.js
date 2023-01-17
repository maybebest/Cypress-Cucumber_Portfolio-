/**
 * getUrl made to build product urls and store them in human-readable way
 * expected to be used in "I open {string} page" step at cypress/integration/common/openPage.spec.js
 */
export const getUrl = () => {
    return {
        'agent site landing': Cypress.env('agentSiteUrl'),
        'general site landing': Cypress.env('generalSiteUrl'),
        'find agent': Cypress.env('generalSiteUrl') + Cypress.env('findAgentPage'),
        'your account': Cypress.env('generalSiteUrl') + Cypress.env('yourAccountPage'),
        'collections': Cypress.env('generalSiteUrl') + Cypress.env('collectionsPage'),
        'saved searches': Cypress.env('generalSiteUrl') + Cypress.env('savedSearchesPage'),
        'command site contacts': Cypress.env('commandSiteUrl') + Cypress.env('commandContactsPage'),
        'market center site landing': Cypress.env('marketCenterUrl'),
        'business center site landing': Cypress.env('businessCenterUrl'),
        'luxury site landing': Cypress.env('luxurySiteUrl')
    }
}
