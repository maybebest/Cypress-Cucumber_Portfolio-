class PropertyDetailsPage {

    PropertyDetailsRoute = '[class="PropertyDetailsRoute"]'
    ExploreButton = 'div#__PROPRERTY-DETAILS-NAVIGATION-NEIGHBORHOOD__ a:contains("Explore")';
    ScheduleVideoTourButton = 'button[data-testid="RequestTour__scheduleButton"]';
    AskYourAgentButton = 'div.PropertyActions div.KWAskAgent button.KWButton';
    SaveButton = '[class="PropertyActions"] [class="KWPropertyActions__text"]:contains("Save")'
    FairHousingLink = '.KWMlsHeader__fairHousing a:contains("Fair Housing")'
    UpcomingOpenHouse = '.KWOpenHouses__openHoursList'

    AskYourAgentForm = {
        FirstName: 'div.KWAskFormDialog div.KWContactForm div.KWFormItem:contains("First Name") div.KWInput input',
        LastName: 'div.KWAskFormDialog div.KWContactForm div.KWFormItem:contains("Last Name") div.KWInput input',
        Email: 'div.KWAskFormDialog div.KWContactForm div.KWFormItem:contains("Email Address") div.KWInput input',
        Message: 'div.KWAskFormDialog div.KWContactForm div.KWFormItem:contains("Message") div.KWValidationTextArea textarea',
        SubmitButton: 'div.KWDialog__footer button:contains("Submit")'
    }

    SingUpModal = {
        SingUpModal: 'div.KWSignup_modal'
    }

    AgentContactsSection = {
        MessageTextArea: 'div.KWFooter--agent div.KWContactForm__comment textarea.KWTextArea',
        SendButton: 'div.KWFooter--agent [data-testid="KWFooter__contactFormButton"]',
        Email: 'div.KWFooter--agent div.KWFormItem:contains("Email") input',
        FirstName: 'div.KWFooter--agent div.KWFormItem:contains("First Name") input',
        LastName: 'div.KWFooter--agent div.KWFormItem:contains("Last Name") input'
    }
    FindAgentModal = {
        Modal: '.KWDialog.KWDialog--twoButtons.KWDialog--boxShadows',
        HeaderTitle: '.KWDialog--twoButtons .KWDialog__headerTitle',
        ModalContent: '.ExclusiveListingsFilter__modalContent',
        FindMyAgentButton: 'div.KWDialog button:contains("Find My Agent")',
        CancelButton: 'div.KWDialog button:contains("Cancel")'
    }
}

export default new PropertyDetailsPage();

