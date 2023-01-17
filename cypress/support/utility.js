import * as agentData from "../fixtures/AgentData.json";
import {searchListingsQuery} from "../graphql/searchListingsQuery";

/**
 * Function made to generate unique emails that will be used for test purposes such user creation, form data, etc...
 */
export function generateUniqueEmail() {
    const date = new Date();
    let timeMilliseconds = date.getTime();

    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let prefix = 'qa.kw.test+cypress+';
    for (let i = 0; i < 5; i++) {
        prefix += chars[Math.floor(Math.random() * chars.length)];
    }
    const domain = '@gmail.com';
    return prefix + timeMilliseconds + domain
}

/**
 * Function made to fake location in the tests
 * Function may be passed as second argument into cy.visit() function
 * @example: cy.visit("https://kw.com", fakeLocation(48, 2))
 */
export function fakeLocation(latitude, longitude) {
    return {
        onBeforeLoad(win) {
            cy.stub(win.navigator.geolocation, "getCurrentPosition", (cb, err) => {
                if (latitude && longitude) {
                    return cb({coords: {latitude, longitude}});
                }
                throw err({code: 1}); // 1: rejected, 2: unable, 3: timeout
            });
        }
    };
}

/**
 * Function made to open first property page in desired location
 * @city argument used for queryObj" parameter in variables object
 * @state argument used for "queryObj" parameter in variables object
 * @domain argument need to be provided to open property for agent or client site
 * @example:  openPropertyPage("Austin", "TX", "https://kw.com")
 */
export function openPropertyPage(city, state, domain) {
    cy.request({
        method: 'POST',
        url: Cypress.env('generalSiteGraphQLUrl'),
        body: {
            operationName: 'searchListingsQuery',
            query: searchListingsQuery,
            variables: {
                after: null,
                first: 100,
                queryObj: `{\"@type\":\"query.listing\",\"filters\":{\"filters\":{\"LOT_SIZE_IN_ACRES\":0,\"AREA_PROPERTY_SMALL\":{\"min\":null,\"max\":null},\"FOR_SALE\":true,\"ACTIVE\":true,\"PENDING\":false,\"COMING_SOON\":true,\"IS_NEW_CONSTRUCTION\":true,\"FORECLOSURES\":true,\"SHORT_SALE\":true,\"FOR_RENT\":false,\"SOLD\":false,\"PRICE_SALE\":{\"min\":null,\"max\":null},\"PRICE_RENT\":{\"min\":null,\"max\":null},\"PRICE_SOLD\":{\"min\":null,\"max\":null},\"PROPERTY_SUBTYPE\":[],\"BEDROOMS\":null,\"BATHROOMS\":null,\"AREA_HOME\":{\"min\":null,\"max\":null},\"AREA_PROPERTY_LARGE\":{\"min\":null,\"max\":null},\"YEAR_BUILT\":{\"min\":null,\"max\":null},\"HOA_FEE\":{\"min\":null,\"max\":null},\"HAS_PARKING\":false,\"KEYWORDS\":[],\"OPEN_HOME_END_DATE\":false,\"PRICE_REDUCED\":false},\"map\":{\"zoom\":9},\"search\":{\"type\":\"city\",\"data\":{\"state\":\"${state}\",\"city\":\"${city}\"}}},\"listing\":{\"flags\":{},\"sorting\":[{\"LISTING_UPDATE_DATE\":\"DESC\"}],\"bounding\":{}}}`
            },
        },
        headers: {
            "content-type": "application/json",
            "x-shared-secret": "MjFydHQ0dndjM3ZAI0ZHQCQkI0BHIyM="
        },
    })
        .its('body')
        .then(body => {
            cy.visit((domain + '/property/' + body.data.SearchListingsQuery.result.listings.edges[0].node.id),
                fakeLocation(48, 2))
        })
}

/**
 * The class contains methods to write and read test data to share it between different cucumber steps/test
 * Before using class methods make sure that path is created in file_paths.js
 * @example:
 * import {path} from "./files_path.js"
 * new FileHandler(path.file_path).write("some string")
 * new FileHandler(path.file_path).read().then((savedData) => {
 *     cy.get(someInputLocator).type(savedData)
 * })
 */
export class FileHandler {
    path;

    constructor(path) {
        this.path = path;
        if (!this.path) {
            throw new Error('file not found !');
        }
    }

    write(data) {
        return cy.writeFile(this.path, data);
    }

    read() {
        return cy.readFile(this.path, {timeout: 30000});
    }
}