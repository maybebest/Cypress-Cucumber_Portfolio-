Feature: Log In

  @KWCON-5718
  @small_smoke
  Scenario: User should be able to see validation error messages at Log In modal
    Given I open "general site landing" page
    When I click on Log In button at Header panel
    * I enter valid email
    * I enter "wrongPassword" password
    * I click on Log in button
    Then I see "The password entered is incorrect. Please try again." password validation error
    When I don't enter email
    * I enter "123456Qa" password
    * I click on Log in button
    Then I see "Email is required" email validation error
    When I enter valid email
    * I don't enter password
    * I click on Log in button
    Then I see "The password entered is incorrect. Please try again." password validation error
    When I enter "blablawrong!email" email
    * I enter "wrongPassword" password
    * I click on Log in button
    Then I see "Oops, this doesn't look like a valid email address!" email validation error
    When I enter valid email
    * I enter valid password
    * I click on Log in button
    Then I see users avatar at Header panel

  @KWCON-5150
  @small_smoke
  @flaky
  Scenario: User is able to Log in
    When I register account with gmail
    Then I receive "Let’s get started, " sign up confirmation email
    When I open "general site landing" page
    * I click on "Log In" button in header panel
    * I enter a valid email address
    * I enter a valid password
    * I click the "Log in" button
    Then I successfully logs in
    * I'm redirected to the Home page

  @KWCON-24069
  @smoke
  Scenario: Log in modal on agent sites
    Given I open "agent site landing" page
    When I click on Log In button at Header panel
    Then I see "Log In" title
    * I see "Welcome back!" subtitle
    * I see Agent avatar circled with red color
    * I see Agent message "As always, reach out to me if you need anything at all."
    * I see Email field with "Email address" placeholder
    * I see Password field with "Password" placeholder
    * I see "eye" icon
    * I see "Log In" button
    * I see "I forgot my password" link
    * I see "Don’t have an account?" label
    * I see "Sign Up" link