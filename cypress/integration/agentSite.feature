Feature: Agent site - agent features

  @KWCON-8012
  @small_smoke
  Scenario: Send message to agent timeline through Ask tour agent form without authentication
    Given I open "agent" site property page
    When I open ask your agent form
    * I fill in "Ask Your Agent" form with valid user data
    * I fill in "Ask Your Agent" form with "Cypress ask agent" message
    * I click submit "Ask Your Agent" form button
    Then I see "Thank you!" info modal title
    * I see "Thank you for your interest! Your form has been submitted successfully. Someone will contact you shortly." info modal subtitle
    When I click "Dismiss" button at info modal
    * I open "command site contacts" page
    * I log in as agent
    Then I see contacts page welcome message
    When I select contact with email specified in form
    Then I see "Cypress ask agent" message in timeline

  @KWCON-8014
  @smoke
  Scenario: Send message in Interested? Lets Talk! form without authentication
    Given I open "agent" site property page
    When I fill in "Interested? Let's Talk!" form wih valid user data
    * I fill in "Interested? Let's Talk!" form with "Cypress lets talk" message
    * I click submit "Interested? Let's Talk!" form
    Then I see "Thank you!" info modal title
    * I see "Thank you for your interest! Your form has been submitted successfully. Someone will contact you shortly." info modal subtitle
    When I click "Dismiss" button at info modal
    * I open "command site contacts" page
    * I log in as agent
    Then I see contacts page welcome message
    When I select contact with email specified in form
    Then I see "Cypress lets talk" message in timeline

  @KWCON-8378
  @smoke
  Scenario: Send message in Interested? Lets Talk! form with authentication
    Given I register "lestTalkEmail" user via GraphQL
    * I log in as "lestTalkEmail" user at "agent" site via GraphQL
    * I open "agent site landing" page
    When I search "Austin, TX" from main search using "Cities" section auto-suggest
    * I open first property at search result page
    Then I see "Interested? Let's Talk!" form prefilled with user name and last name
    * I see "Interested? Let's Talk!" form prefilled with "lestTalkEmail" user
    When I fill in "Interested? Let's Talk!" form with "Cypress auth lets talk" message
    * I click submit "Interested? Let's Talk!" form
    * I click "Dismiss" button at info modal
    * I open "command site contacts" page
    * I log in as agent
    Then I see contacts page welcome message
    When I select contact with email specified in form
    Then I see "Cypress lets talk" message in timeline

  @KWCON-8721
  @smoke
  Scenario: Check search page footer elements without authentication
    Given I open "agent site landing" page
    When I search "Brooklyn, New York, NY" from main search using "Cities" section auto-suggest
    Then I see property cards
    * I see policy text
    * I see copyright text
    * I see footer elements

  @KWCON-8721
  @smoke
  Scenario: Agent Sites - Log out
    Given I create an account and login at "agent" site via GraphQL
    * I open "agent site landing" page
    When I click on user avatar
    * I click on the "Sign out" button
    Then I am logged out
    * I redirected to agent landing page with "New agent site hero text" title