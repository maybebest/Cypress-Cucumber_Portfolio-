class SignUpModalPage {
    SignUpModal = '.KWSignup_modal'
    FirstName = 'form.KWSignup input[placeholder="First name"]'
    LastName = 'form.KWSignup input[placeholder="Last name"]'
    Email = 'form.KWSignup input[placeholder="Email address"]'
    Password = 'form.KWSignup input[placeholder="Password"]'
    EyeIcon = '.icon-show'
    SingUpButton = '[data-testid="KWSignup__button"]'
    AcceptTermsCheckbox = 'form.KWSignup div.KWSignup__termsBlock .KWCheckbox__square'
    AcceptTermsBlock = 'form.KWSignup .KWSignup__termsBlock_new'
    ValidationInput = '.KWValidationInput'
    ValidationError = '.KWValidationError'
    Title = '.KWSignupInfo__title'
    InfoList = '.KWSignupInfo__list'
    Image = '.KWSignupInfo__image'
    AlreadyHaveAccountLink = '.KWSignup__loginBlock'
    SignUpTitle = '.KWSignup__title--HiddenDescription'
    AgentDescription = '.KWSignup__agentDescription'
    AgentAvatar = '.KWSignup__agentAvatar'
}

export default new SignUpModalPage()