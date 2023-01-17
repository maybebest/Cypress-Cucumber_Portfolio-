class ChangePasswordPage {
    PasswordTitle = '.SettingsSection__title'
    CurrentPasswordInput = '[placeholder="Enter your current password"]'
    NewPasswordInput = 'div.SettingsTab div.KWForm__field input[placeholder="Enter your new password"]'
    ConfirmNewPasswordInput = 'div.SettingsTab div.KWForm__field input[placeholder="Confirm your new password"]'
    ConfirmButton = 'div.SettingsTab div.KWForm__buttons button:contains("Confirm")'
    CancelButton = 'div.SettingsTab div.KWForm__buttons button:contains("Cancel")'
    TabTitle = 'div.SettingsTab div.SettingsSection__header:contains("Password")'
}

export default new ChangePasswordPage()