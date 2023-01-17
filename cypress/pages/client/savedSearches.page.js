class SavedSearchesPage {
    SavedSearchItem = '.SavedSearch__title'
    EditButton = 'button[data-testid="SavedSearch__action"]:contains("Edit")'
    DeleteSavedSearch = 'div.EditSearchModal__trashIcon__container.EditSearchModal__locationSection.EditSearchModal__section--clickable'
    DeleteButton = 'div.KWSimpleModal--alert button.KWButton.KWButton--primary'
    DeleteModalTitle = 'div.KWSimpleModal--alert div.KWSimpleModal__title'
    StartSearchingButton = 'button.KWButton:contains("Start Searching")'
    Map = '.KWMap'
    SearchInput = 'div.KWSearchInput input.KWSearchInput__input'

    SavedSearchModal = {
        SearchNameInput: '.EditSearchModal__input input'
    }
    NewSavedSearchModal = {
        Modal: 'div.KWDialog.EditSearchModal__dialog',
        SearchInput: 'div.KWDialog div.EditSearchModal__input input[placeholder="Name Your Saved Search"]',
        LocationSection: 'div.KWDialog div.EditSearchModal__locationSection',
        EmailNotification: 'div.KWDialog div.EditSearchModal__emailNotificationSection',
        EmailNotificationFrequency: 'div.KWDialog div.EditSearchModal__emailNotificationSection div.KWSelect__text',
        CancelButton: 'div.KWDialog button.KWButton:contains("Cancel")',
        SaveButton: 'div.KWDialog button.KWButton:contains("Save")'
    }
}

export default new SavedSearchesPage();