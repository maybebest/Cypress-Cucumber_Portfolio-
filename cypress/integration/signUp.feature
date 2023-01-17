Feature: Sign Up

  @KWCON-4720
  @small_smoke
  Scenario: New user is able to sign up
    Given I open "general site landing" page
    When I click on the "Sign Up" button in header
    * I enter "CyValidName" first name
    * I enter "CyValidLastname" last name
    * I enter random valid email address
    * I enter "CyValidPass!" password
    * I activate the checkbox for Terms of Use and Privacy Policy Consent
    * I click the "Sign up" button in modal
    Then I see "You’re all set!" info modal title
    * I see "Your sign up was successful, time to start exploring home listings in your area." info modal subtitle

  @KWCON-17377
  @small_smoke
  Scenario: New user is not able to sign up with existing email
    Given I open "general site landing" page
    When I click on the "Sign Up" button in header
    * I enter "CyValidName" first name
    * I enter "CyValidLastname" last name
    * I enter an existing email address
    * I enter "CyValidPass!" password
    * I activate the checkbox for Terms of Use and Privacy Policy Consent
    * I click the "Sign up" button in modal
    Then I see "Email address" field "User with given email already exists" validation error

  @KWCON-24050
    @KWCON-4707
    @new
  Scenario Outline: Sign up modal window - check layout elements presence at <site>
    Given I open "<site>" page
    When I click on the "Sign Up" button in header
    Then I see title: "Sign Up To Get More"
    * I see list of info texts
      | Revisit and receive timely updates on your searches                                  |
      | Collaborate with your KW Agent or Co-buyer on properties that best fit your needs    |
      | Follow neighborhoods to see meaningful market data and price trends                  |
      | Gain access to the world’s largest off-market property network through your KW agent |
    * I see sign up info image
    * I see "Sign Up" title in the form section
    * I see form "First name" field
    * I see form "Last name" field
    * I see form "Email" field
    * I see form "Password" field
    * I see eye icon to unhide password
    * I see checkbox for accept terms of use
    * I see accept terms link with "I accept Keller Williams Terms of Use and Privacy Policy" text
    * I see have account link with "Already have an account? Log In" text
    * I see Sign up button
    Examples:
      | site                         |
      | general site landing         |
      | market center site landing   |
      | business center site landing |
      | luxury site landing          |

  @KWCON-4725
  @small_smoke
  Scenario: New user can see Sign Up modal input fields validation errors (wrong email)
    When I open "general site landing" page
    * I click on the "Sign Up" button in header
    When I enter "notValidEmail.com" email address
    * I click the "Sign up" button in modal
    Then I see "Email address" field "Oops, this doesn't look like a valid email address!" validation error

  @KWCON-4722
  @small_smoke
  Scenario: New user can see Sign Up modal input fields validation errors (empty fields)
    When I open "general site landing" page
    * I click on the "Sign Up" button in header
    * I clear "First name" field
    * I clear "Last name" field
    * I clear "Email" field
    * I clear "Password" field
    * I click the "Sign up" button in modal
    Then I see "First name" field "Name is required" validation error
    * I see "Last name" field "Last Name is required" validation error
    * I see "Email address" field "Email is required" validation error
    * I see "Password" field "Password is required." validation error
    * I see "Accept terms and Policy" checkbox "Please accept to create an account" validation error

  @KWCON-4721
  @small_smoke
  Scenario: New user can see Sign Up modal input fields validation errors (short/too long password)
    When I open "general site landing" page
    * I click on the "Sign Up" button in header
    * I enter "CyValidName" first name
    * I enter "CyValidLastname" last name
    * I enter random valid email address
    * I enter "short" password
    * I click the "Sign up" button in modal
    Then I see "Password" field "Please enter a password at least 8 characters long." validation error
    * Password field has red edging
    When I enter "CyValidPass!" password
    * I click the "Sign up" button in modal
    Then I don't see "Password" field "Please enter a password at least 8 characters long." validation error
    * Red edging isn't displayed
    When I enter "MoreThan60CharactersMoreThan60CharactersMoreThan60CharactersMoreThan60Characters" password
    * I click the "Sign up" button in modal
    Then I see "Password" field "Please enter a password at least 8 characters long." validation error
    * Password field has red edging
    When I enter "CyValidPass!" password
    * I click the "Sign up" button in modal
    * I click on eye icon
    Then I see "CyValidPass!" password text