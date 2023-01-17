class CollectionDetailsPage {
    
    EditButton = '.CollectionDetails__headerButton:contains("Edit")'
    CollectionDetailTitle = '.CollectionDetails__collectionName'
    PropertyCard = '.KWPropertyCard'
    HeartIcon = '.icon-heart-active'
    EmptyCollectionTitle = '.KWEmptyState__title'

    EditCollectionModal = {
        CollectionTileInput: '.KWValidationInput',
        SaveButton: '.EditCollectionModal .KWButton--primary'
    }
    DeleteConfirmationModal = {
        DeleteButton: 'button.KWButton:contains("Delete")',
        DismissButton: 'button.KWButton:contains("Dismiss")'
    }
}

export default new CollectionDetailsPage()