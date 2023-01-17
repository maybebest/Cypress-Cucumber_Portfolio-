class YourAccountPage {
    EditProfileSubTab = {
        MyProfileTitle: 'div.SettingsSection.ProfileSection div.SettingsSection__title',
        FirstNameLabel: 'div.SettingsSection.ProfileSection div.SettingsSection__body div.KWForm__label:contains("First Name")',
        LastNameLabel: 'div.SettingsSection.ProfileSection div.SettingsSection__body div.KWForm__label:contains("Last Name")',
        FirstNameInput: 'input[placeholder*="first name"]',
        LastNameInput: 'input[placeholder*="last name"]',
        ContactInformationTitle: 'div.SettingsSection.ContactSection div.SettingsSection__title',
        EmailAddressField: 'div.ContactSection__header div.KWForm__label',
        PhoneNumberField: 'div.SettingsSection.ContactSection div.KWForm__label:contains("Phone number")',
        PhoneNumberInput: 'input[placeholder*="phone number"]',
        CancelButton: '.KWButton.KWButton--secondary.KWButton--medium',
        SaveChangesButton: 'button.KWButton.KWButton--primary.KWButton--medium',
        PhoneTypeDropdown: '.ContactSection__phoneSelect.KWSelect',
        Mobile: '.KWSelect__menu>div:nth-of-type(1)',
        Home: '.KWSelect__menu>div:nth-of-type(2)',
        Office: '.KWSelect__menu>div:nth-of-type(3)',
        ProfileUpdateCofirmationModal: '.KWSimpleModal.KWSimpleModal--confirm.KWSimpleModal--success',
        profileUpdateSuccessMessage: '.KWSimpleModal__subtitle',
        DissmissButton: 'button[class="KWButton KWButton--primary"][type="button"]',
        PhoneDropdownOption: '.ContactSection__phoneSelect .KWSelect__menu .KWSelectOption'
    }
    YourAccountTab = {
        ChangePasswordTabLink: 'div.MeRoute div.MyAccount__nav a.SettingsNav__link:contains("Change Password")',
        EditProfileTabLink: 'div.MeRoute div.MyAccount__nav a.SettingsNav__link:contains("Edit Profile")',
        FirstName: 'input[placeholder="Enter your first name"]',
        LastName: 'input[placeholder="Enter your last name"]',
    }
    UserName = '.MeHeader__name'
    NotificationsLink = '[class="SettingsNav__link"]:contains("Notifications")'
    ValidationInput = '.KWValidationInput'
    ProfileSection = '.ProfileSection'
    ContactSection = '.ContactSection'

    getProfileInputField(fieldName) {
        return `.KWForm__field:contains("${fieldName}") input`
    }
}

export default new YourAccountPage()