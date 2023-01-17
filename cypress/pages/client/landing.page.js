class LandingPage {

    Landing = `div.app--consumer`
    MainTitle = '.SplashScreen__mainHeadingText:contains("Find Your Dream Home")'
    SearchAgentInput = 'div.AgentOfficeSearch div.AgentSearchAutoComplete input.KWSearchInput__input'
    SearchPropertyInput = 'div.SearchBar input.KWSearchInput__input'
    FindOfficeTab = 'div.KWTabs__content div.FIND_OFFICE'
    FindOfficeSearchInput = 'div.OfficeSearchAutoComplete input.KWSearchInput__input'
    FindOfficeSearchInputAutosuggest = 'div.OfficeSearchAutoCompletePopUp a.KWSearchDataLine'
    SearchSuggest = 'a.KWSearchDataLine'
    ForSaleActive = 'button.KWButton  span:contains("For Sale")'
    ForRent = 'button.KWButton span:contains("For Rent")'

    UserMenu = {
        HistoryLink: 'div.KWNavigation__linksMenu div.KWNavigation__items a:contains("History")',
        CoBuyerLink: 'div.KWNavigation__linksMenu div.KWNavigation__items a:contains("Co-buyer")',
        YourAccountLink: 'div.KWNavigation__linksMenu div.KWNavigation__items a:contains("Your Account")',
        SingOutLink: 'div.KWNavigation__linksMenu div.KWNavigation__items div:contains("Sign Out")'
    }

    getSearchAutocompleteSection(section) {
        return `div.KWSearchPopup div.KWSearchSection:contains("${section}") div.KWSearchSection__content span`
    }

}

export default new LandingPage();