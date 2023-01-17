class HeaderPanelPage {
    UserAvatar = 'div.KWNavigation div[data-testid="avatar"]'
    GuideButtonLink = 'div.KWNavigation a:contains("Guide")'
    SignUpButton = '[data-testid="KWNavigation__signup"]'
    LogInButton = '[data-testid="KWNavigation__logIn"]'
    SearchInput = '.KWSearchInput__input'
    SearchDataLine = '.KWSearchDataLine'
    SavedTab = '.KWNavigationItemDropdown__title:contains("Saved")'

    SavedDropdown = {
        CollectionsOption: '.KWSavedMenu__linkTitle:contains("Collections")',
        ViewAllButton: '[data-testid="KWSavedMenu__itemButton"]'
    }
    
    SavedMenu = {
        SavedItemTitle: '.KWSavedMenu__itemTitle',
        SavedSearchesCategory: '.KWSavedMenu__savedSearches'
    }
}

export default new HeaderPanelPage()