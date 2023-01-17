class ContactsPage {
    SearchInput = 'input[data-test="search-input-jest"]';
    SwitchToPersonalLink = 'a:contains("Switch to personal account")';
    ContactDetails = 'a:has(div[data-test="contact-icon"])';
    WelcomeMessage = '[data-test="dynamic-table-heading"]';
}

export default new ContactsPage()