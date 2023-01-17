class SearchResultPage {
    FirstPropertyCard = 'div.SearchList div.l-propertyCard a.KWPropertyCard:first'
    PropertyCard = 'div.SearchList div.l-propertyCard a.KWPropertyCard'
    PropertyWithoutOpenHouse = 'a.KWPropertyCard:not(:contains("OPEN HOUSE"))'
    PropertyPage = 'div.PropertyDetailsRoute'
    NeighborhoodCard = 'div.KWNeighborhoodsList__item'
    PropertyCards = '.KWPropertyCard--clickable .KWPropertyCard__bottom'
    FirstNeighborhoodCard = 'div.KWNeighborhoodsList__item:first'
    LargeNeighborhoodCard = 'div.KWNeighborhoodItem'
    LargeNeighborhoodCardInfo = 'div.KWNeighborhoodItem__info'
    LargeNeighborhoodCardTitle = 'div.KWNeighborhoodItem__title'
    SaveSearchButton = 'button[data-testid="SearchList__saveSearchButton"]'
    FirstHeartIcon = '.KWPropertyCard:eq(0) .icon-heart'
    SecondHeartIcon = '.KWPropertyCard:eq(1) .icon-heart'

    PolicyText = 'div.SearchList__footer div.KWFooterPolicy__line'
    CopyrightText = 'div.SearchList__footer div.KWFooterPolicy__line'

    DBALogo = 'div.SearchList__footer div.KWFooterCompliance__dbaSection img.KWImage__image'
    DBAName = 'div.SearchList__footer div.KWFooterCompliance__marketCenter'
    DBAOffice = 'div.SearchList__footer div.KWFooterCompliance__agentContactInfo:contains("Office")'

    TeamLogo = 'div.SearchList__footer div.KWFooterCompliance__generalInfo img.KWImage__image'
    TeamName = 'div.SearchList__footer div.KWFooterCompliance__name div.KWFooterCompliance__teamInfo'
    AgentName = 'div.SearchList__footer div.KWFooterCompliance__name div.KWFooterCompliance__agentName'
    AgentLicense = 'div.SearchList__footer div.KWFooterCompliance__brokerageLicense'
    SocialLinks = 'div.SearchList__footer div.KWFooterCompliance__links'

    IncreaseZoomLevelButton = '.KWZoomControl__button:contains("+")'
    SearchInput = 'input.KWSearchInput__input'
    SearchResultList = 'div.SearchList__content'
    SortByButton = 'div.SearchList__sort button span:contains("Sort by")'
    HighToLow = '.KWSingleSelection__option.active:contains("High to low")'
    SortItem = '.KWSort__item'
    CheckBox = '.KWCheckbox'
    Map = '.KWMap'
    PropertyMapMarker = '.KWOnMarketPropertyMapMarker__content'
    SearchListSummery = '.SearchList__summary'
    SaveSearchButton = '.SearchList__actions .SearchList__saveSearchButton'
    ClearSearchInput = '.KWSearchInput__clear'

    NewSavedSearchModal = {
        SaveButton:'div#root-modal div.EditSearchModal__dialog button.KWButton--primary'
        
    }

    SaveToCollectionModal = {
        Modal:'.KWModal__content .KWDialog',
        Title:'.KWModal__content .KWDialog .KWDialog__headerTitle',
        Subtitle:'.KWDialog__headerSubtitle',
        CreateNewCollectionButton:'[class="KWSaveToCollectionModal__addNewCollectionCTA"]',
        NewCollectionCheckbox:'.KWSaveToCollectionModal__addNewCollection .KWCheckbox',
        CollectionNameInput:'[placeholder="Enter collection name"]',
        CheckboxChecked:'[class="KWCheckbox KWCheckbox--checked"]',
        SaveButton:'[class="KWButton KWButton--primary"]',
        Checkbox: '[class="KWCheckbox"]',
        CollectionLabel:'.KWSaveToCollectionModal__collection .KWCheckbox__label',
        CloseIcon:'[class="icon icon-close-delete KWDialog--closeButton"]',
        SaveButtonDisabled: '[class="KWButton KWButton--primary KWButton--disabled"]',
        DefaultCollectionCheckbox: '.KWCheckbox__square',
        CancelButton: '[class="KWButton KWButton--secondary"]'
    }

    SavedTocollectionSuccessModal = {
        PropertySavedTitle:'[class="KWDialog__headerTitle"]',
        AddNotesButton:'[data-testid="KWSaveToCollectionSuccessModal__feedbackButton"]',
        MaybeLaterButton:'[class="KWButton KWButton--secondary"]',
        SuccessMessage:'.KWSaveToCollectionSuccessModal__messageCell',
        FeedbackTitle:'.KWSaveToCollectionSuccessModal__feedbackTitle',
        FeedbackSubtitle:'.KWSaveToCollectionSuccessModal__feedbackSubtitle'
    }

    AddNotesModal = {
        AddNotesTitle:'[class="KWDialog__headerTitle"]',
        NotesInput:'[placeholder="Write your notes here..."]',
        SaveButton:'[class="KWButton KWButton--primary"]'
    }

    SearchFilter = {
        PropertyTypeOption: 'div.DropdownFilter__content div.KWMultipleSelection__option',
        PropertyTypeFilterMenu: 'button.KWButton--dropdownFilter:contains("Property Type")',
        PropertyTypeFilterSelectedOption: 'button.KWButton--dropdownFilter'
    }

    ForRentFilter = {
        ForRent: 'button.KWButton--dropdownFilter:contains("For Rent")',
        ForRentToggleLabel: '.KWOnMarketPropertyMapMarker__innerContent:contains("For Rent")',
        ToggleOn: '.KWBooleanControl--on'
    }

    setZoomLevel = (level) => {
        cy.location('href')
            .then((href) => {
                if (href.includes(`zoom=${level}`)) {
                    cy.log(`Zoom level set to - ${level}`)
                } else {
                    cy.get(SearchResultPage.IncreaseZoomLevelButton).click()
                    cy.wait(1000, { log: false })
                    this.setZoomLevel(level)
                }
            })
    }
}

export  default new SearchResultPage();