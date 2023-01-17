class LoginModal {
    Email = '#email'
    Password = '#password'
    LogInButton = '.KWLogin .KWLogin__loginButton'
    ValidationError = '.KWValidationError span'
    Title = '.KWLogin__title--improved'
    SubTitle = '.KWLogin__descriptionTitle--improved'

    loginModalAgent = {
        SubTitle: '.KWLogin__descriptionTitle--agentImproved',
        AgentAvatar: '.KWLogin__agentAvatar .Avatar__container',
        AgentMessage: '.KWLogin__agentDescription'
    }

    EyeShowIcon = '.icon-show'
    ForgotPasswordLink = 'div:contains("I forgot my password")'
    DontHaveAccountLink = 'span:contains("Don\'t have an account?")'
    SignUpLink = 'span:contains("Sign Up")'
}

export default new LoginModal()