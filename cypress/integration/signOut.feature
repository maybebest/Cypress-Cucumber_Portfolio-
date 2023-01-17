Feature: Sign Out

  Background:
    Given I create an account and login at "general" site via GraphQL

  @KWCON-5204
  @small_smoke
  Scenario: User is able to Sign Out from Landing page
    Given I open "general site landing" page
    When I click on user avatar
    * I click on the "Sign out" button
    Then I am logged out
    * I redirected to landing page

  @KWCON-5204
  @small_smoke
  Scenario: User is able to Sign Out from You page
    Given I open "your account" page
    * I click "Sing out" link-button
    Then I am logged out
    * I redirected to landing page