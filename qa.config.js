const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  viewportHeight: 1200,
  viewportWidth: 1500,
  pageLoadTimeout: 120000,
  watchForFileChanges: false,
  videoCompression: false,
  numTestsKeptInMemory: 2,
  env: {
    /**
     * agentSiteUrl can be changed on command side,
     * so each time tests run actual url grabbed through API from command in before hook at cypress/support/e2e.js
     */
    agentSiteUrl: 'will_be_set_in_before_hook',
    generalSiteUrl: 'https://some_url',
    savedSearchesPage: '/saved-searches',
    collectionsPage: '/collections',
    findAgentPage: '/agent/search',
    yourAccountPage: '/you/settings',
    generalSiteGraphQLUrl: 'https://some_url',
    commandSiteUrl: 'https://some_url',
    commandContactsPage: '/contacts',
    commandLoginGraphQLUrl: 'https://some_url',
    commandAgentDomainGraphQLUrl: 'https://some_url',
    marketCenterUrl: 'https://some_url',
    businessCenterUrl: 'https://some_url',
    luxurySiteUrl: 'https://some_url',
    environment: 'qa',
    mailSlurpApiKey: ""
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ['cypress/integration/*.feature'],
    experimentalSessionAndOrigin: true,
  },
})
