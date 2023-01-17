/// <reference types="@shelex/cypress-allure-plugin" />
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor')
const path = require("path")
const gmail = require("gmail-tester")

/**
 * @type {Cypress.PluginConfig}
 */
let item = {};
module.exports = (on, config) => {

    on("task", {
        "gmail:get-messages": async args => {
            const messages = await gmail.get_messages(
                path.resolve(__dirname, "gmail/credentials-qa.kw.test.inbox.json"),
                path.resolve(__dirname, "gmail/gmail_token.json"),
                args.options
            );
            return messages;
        }
    })

    on("task", {
        "gmail:check": async args => {
            const {from, receiver, subject} = args;
            const email = await gmail.check_inbox(
                path.resolve(__dirname, "gmail/credentials-qa.kw.test.inbox.json"), // credentials.json is inside plugins/ directory.
                path.resolve(__dirname, "gmail/gmail_token.json"), // gmail_token.json is inside plugins/ directory.
                subject,
                from,
                receiver,
                20,                                          // Poll interval (in seconds)
                30                                           // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().
            );
            return email;
        }
    })

    on('before:browser:launch', (_, launchOptions) => {
        launchOptions.args.push('--window-size=1920,1080');
        return launchOptions;
    });
    const options = browserify.defaultOptions;
    options.typescript = require.resolve('typescript');
    on('file:preprocessor', cucumber(options));
    on('task', {
        setItem: ({value, key}) => {
            return (item[key] = value);
        },
        getItem: () => {
            return item;
        },
    });
    allureWriter(on, config);
    require('cypress-grep/src/plugin')(config)

    return config
}


