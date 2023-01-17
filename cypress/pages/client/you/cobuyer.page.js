class CobuyerPage {
    FirstNameInput = 'form.KWForm.InviteCoBuyerForm div.KWForm__field:contains("First Name") input'
    LastNameInput = 'form.KWForm.InviteCoBuyerForm div.KWForm__field:contains("Last Name") input'
    EmailInput = 'form.KWForm.InviteCoBuyerForm div.KWForm__field:contains("Email Address") input'
    InviteButton = 'div.KWForm__buttons button[data-testid="InviteCoBuyerForm__submitButton"]'
    CoBuyerSection = 'div.CoBuyerSection'
    PendingEmailInvite = 'div.CoBuyerSection__invitationStatus'
    RejectInvitation = 'div.CoBuyerSection__pendingButtons button:contains("Reject Invitation")'
    AcceptInvitation = 'div.CoBuyerSection__pendingButtons button:contains("Accept Invitation")'
    LinkedCobuyer = 'div.CoBuyerSection div.CoBuyerSection__profile div.CoBuyerSection__linkDate'
    CoBuyerProfile = '.CoBuyerSection__profile'
    RemoveCoBuyer = '.CoBuyerSection__removeCoBuyer'
    InviteCoBuyerSection = '.EmptyCoBuyerSection'
}

export default new CobuyerPage()