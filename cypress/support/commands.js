import {consumerSignInQuery} from "../graphql/consumerSignIn"
import {consumerSignUpQuery} from "../graphql/consumerSignUp";
import {agentClaimActionQuery} from "../graphql/AgentClaimActionQuery";
import {generateUniqueEmail} from "./utility";
import * as registrationData from "../fixtures/RegistrationData.json";
import {openPropertyPage} from "./utility";
import {consumerInviteCoBuyerActionQuery} from "../graphql/consumerInviteCoBuyer";
import {consumerCoBuyerInviteAcceptActionQuery} from "../graphql/consumerAcceptInvitationCobuyer";

/**
 * "registerClientUserThroughAPI" - create a new KW user thought graphql request with provided email and password
 */
Cypress.Commands.add('registerClientUserThroughAPI', (
    email = generateUniqueEmail(),
    password,
    firstName,
    lastName) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('generalSiteGraphQLUrl'),
        body: {
            operationName: 'consumerSignUpAction',
            query: consumerSignUpQuery,
            variables: {
                "user": {
                    "email": email,
                    "firstName": firstName,
                    "lastName": lastName,
                    "password": password,
                    "siteType": "consumer"
                },
                "siteType": "consumer",
                "clientType": "WEB"
            },
        },
        headers: {
            "x-shared-secret": "MjFydHQ0dndjM3ZAI0ZHQCQkI0BHIyM=",
            "content-type": "application/json"
        },
    }).then((response) => {
        cy.task('setItem', {value: response.body.data.ConsumerSignUpAction.result.userToken, key: email})
    })
});

/**
 * "authUserThoughAPI" - authorizes(logs in) registered KW user with provided username and password thought graphql request
 */
Cypress.Commands.add('authUserThoughAPI', (
    email = generateUniqueEmail(),
    password = registrationData.Password,
    site = Cypress.env('generalSiteUrl')) => {
    // cy.session(email, () => {
    cy.request({
        method: 'POST',
        url: Cypress.env('generalSiteGraphQLUrl'),
        body: {
            operationName: 'consumerSignInAction',
            query: consumerSignInQuery,
            variables: {username: email, password: password, siteType: "consumer"},
        },
        headers: {
            "x-shared-secret": "MjFydHQ0dndjM3ZAI0ZHQCQkI0BHIyM=",
            "content-type": "application/json"
        },
    })
        .its('body')
        .then(body => {
            cy.task('setItem', {value: body.data.ConsumerSignInAction.result.userToken, key: email})
            cy.visit(site)
            cy.window().then((win) => win.localStorage.setItem('_a', body.data.ConsumerSignInAction.result.userToken))
        })
    // })
});

/**
 * "createAndLoginUser" - create and logs in KW user via graphQL
 */
Cypress.Commands.add('createAndLoginUser', (
    email = generateUniqueEmail(),
    site = Cypress.env('generalSiteUrl')) => {
    cy.registerClientUserThroughAPI(email, registrationData.Password,
        registrationData.FirstName, registrationData.LastName)
    cy.authUserThoughAPI(email, registrationData.Password, site)
});

/**
 * "clickOptionalElement" - looks for "optionalElement" arg in DOM, if it exists - "elementToClick" arg receive click,
 if not - nothing happens without throwing error
 */
Cypress.Commands.add('clickOptionalElement', (optionalElement, elementToClick) => {
    cy.get('body')
        .then(($body) => {
            // synchronously query from body
            // to find which element was created
            if ($body.find(optionalElement).length > 0) {
                return elementToClick
            }
        })
        .then((selector) => {
            // selector is a string that represents
            // the selector we could use to find it
            cy.get(selector).click({force: true})
        })
});

/**
 * "openLinkInSameTab" - opens link in same tab
 * should be used for links with "target" attribute that forces link to be opened in new tab
 */
Cypress.Commands.add('openLinkInSameTab', (link) => {
    cy.get(link)
        .invoke('removeAttr', 'target')
        .click()
});

/**
 * "openFirstPropertyByCityAndState" - opens first property available at specified site at provided city and state
 */
Cypress.Commands.add('openFirstPropertyByCityAndState', (city, state, site) => {
    openPropertyPage(city, state, site)
});

Cypress.Commands.add("repeatCommandUntil", (cmd, timeout, interval) => {
    Cypress.log({type: 'parent', name: "repeatCommandUntil", message: ""});
    const repeatCommandUntilFunction = (cmd, startTimeInMillis, timeout, interval) => {
        return cy.wait(interval, {log: false}).then(() => {
            if (cmd()) {
                Cypress.log({type: 'child', name: "", message: "command was successful"});
                return cy.wrap(true, {log: false});
            } else {
                const nowMillis = new Date().getTime();
                if (nowMillis - startTimeInMillis > timeout) {
                    Cypress.log({
                        type: 'child',
                        name: "",
                        message: `after ${timeout}ms command did not succeed, giving up!`
                    });
                    return cy.wrap(false, {log: false});
                } else {
                    return repeatCommandUntilFunction(cmd, startTimeInMillis, timeout, interval);
                }
            }
        });
    };
    return repeatCommandUntilFunction(cmd, new Date().getTime(), timeout, interval);
});

/**
 * "sendCoBuyerInvitationThroughAPI" - send a co-buyer invitation
 * from invitationSenderEmail to invitationReceiverEmail thought graphql request
 */
Cypress.Commands.add('sendCoBuyerInvitationThroughAPI', (
    invitationSenderEmail,
    invitationReceiverEmail,
    firstName,
    lastName) => {
    cy.task('getItem').then((token) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('generalSiteGraphQLUrl'),
            body: {
                operationName: 'ConsumerInviteCoBuyerAction',
                query: consumerInviteCoBuyerActionQuery,
                variables:
                    {email: invitationReceiverEmail, firstName: firstName, lastName: lastName},
            },
            headers: {
                "x-shared-secret": "MjFydHQ0dndjM3ZAI0ZHQCQkI0BHIyM=",
                "content-type": "application/json",
                "authorization": token[invitationSenderEmail]
            },
        })
    })
})

/**
 * "acceptCoBuyerInvitationThroughAPI" - accept a co-buyer invitation for invitationReceiverEmail thought graphql request
 */
Cypress.Commands.add('acceptCoBuyerInvitationThroughAPI', (invitationReceiverEmail) => {
    cy.task('getItem').then((token) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('generalSiteGraphQLUrl'),
            body: {
                operationName: 'ConsumerCoBuyerInviteAcceptAction',
                query: consumerCoBuyerInviteAcceptActionQuery,
                variables:
                    {},
            },
            headers: {
                "x-shared-secret": "MjFydHQ0dndjM3ZAI0ZHQCQkI0BHIyM=",
                "content-type": "application/json",
                "authorization": token[invitationReceiverEmail]
            },
        })
    })
})

Cypress.Commands.add('claimAgent', (agentRequesterEmail) => {
    cy.task('getItem').then((token)=>{
        console.log('token', token)
        console.log('agentRequesterEmail', agentRequesterEmail)
        cy.request({
            method: 'POST',
            url: Cypress.env('generalSiteGraphQLUrl'),
            body: {
                operationName: 'AgentClaimAction',
                query: agentClaimActionQuery,
                variables: {agentId: "UPA-6595756249105510403-7"},
            },
            headers: {
                "x-shared-secret": "MjFydHQ0dndjM3ZAI0ZHQCQkI0BHIyM=",
                "content-type": "application/json",
                "authorization": token[agentRequesterEmail]
            },
        })
    })
});