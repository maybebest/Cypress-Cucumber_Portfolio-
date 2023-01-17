class CollectionsPage {
    CollectionsTitle = '.CollectionsTab__title'
    CollectionTab = 'div.CollectionsTab'
    CreateNewCollectionButton = '[data-testid="CollectionsTab__createButton"]'
    CreateNewCollectionModal = '.EditCollectionModal'
    ModalTitleInput = '[placeholder="Collection title"]'
    ModalDescriptionInput = '.KWTextArea'
    ModalEmailDropdown = '.KWSelect__text'
    EmailFrequencyOption = '.KWSelectOption'
    ModalCreateButton = '[class="KWButton KWButton--primary"]'
    ModalCancelButton = '[class="KWButton KWButton--secondary"]'
    ModalErrorMessage = '.KWValidationError span'
    CollectionName = '.CollectionCard__name'
    CollectionCreatedToast = '.KWToast__text:contains("Collection Created")'
    CollectionPropertyCard = '.CollectionCard__property'
    EditCollectionIcon = '.icon-edit'
    CollectionsRemovedToast = '.KWToast__text'
    ShareCollectionIcon = '.icon-share'
    ConfirmationToast = '.KWToast--show'

    EmptyCollectionPage = {
        Title: '.KWEmptyState__title',
        Description: '.KWEmptyState__description',
        StartSearchingButton: '.KWButton__label'
    }

    EditCollections = {
        DeleteCollectionButton: '.KWEditCollectionModal__deleteSection',
        DeleteButton: '[class="KWButton KWButton--primary"]'
    }

    ShareCollectionModal = {
        Modal: '.KWShareCollectionModal',
        Title: '.KWDialog__headerTitle',
        Field: 'input',
        FieldTitle: '.KWFormItem__title',
        FormItem: '.KWShareCollectionModal__formItem',
        AddButton: '[class="KWButton KWButton--primary"]',
        AlertMessage: '.KWValidationError',
        CurrentCollaboratorsTitle: '.KWShareCollectionModal__collaboratorsTitle',
        CollaboratorName: '.KWShareCollectionModal__name'
    }
}

export default new CollectionsPage() 