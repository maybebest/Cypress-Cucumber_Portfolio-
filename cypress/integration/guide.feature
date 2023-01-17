@guide
Feature: Guide

  @KWCON-10409
  @small_smoke
  Scenario: Check default Selling intro and Buying intro
    Given I create an account and login at "general" site via GraphQL
    * I open "general site landing" page
    When I click on "Guide" option
    * I open "Buying" tab
    Then I should see a Buying tab intro
    When I open "Selling" tab
    Then I should see a Selling tab intro

  @KWCON-9802
  Scenario: Unbranded - Sell guide page - unauthorized user
    Given I open "general site landing" page
    When I click on "Guide" option
    Then I see a Title: "Guide - The modern way to move"
    * I see a Description at Guide page on Buying tab
    When I opens "Selling" tab as an unauthorized user
    Then I see a Description at Guide page on Selling tab

  @KWCON-12597
  Scenario: Find an Agent from Guide page
    Given I create an account and login at "general" site via GraphQL
    * I open "general site landing" page
    When I click on "Guide" option
    Then I see "Find an Agent" button
    When I click on "Find an Agent" button at Guide page
    Then I should be navigated on Find an Agent page
    When I navigate back
    * I open "Selling" tab at Guide page
    Then I see "Find an Agent" button
    When I click on "Find an Agent" button at Guide page
    Then I should be navigated on Find an Agent page
    When I navigate back
    Then I see "Find an Agent" button on each Guide step
    When I open "Buying" tab at Guide page
    Then I see "Find an Agent" button on each Guide step

  @KWCON-10914
  Scenario: Co-buyers share progress of Default guide
    Given I register "guideStepReviewer" user via GraphQL
    * I register "guideStepMarker" user via GraphQL
    * I send a co-buyer invitation as "guideStepReviewer" user to "guideStepMarker" user via GraphQL
    * I accept co-buyer invitation as "guideStepMarker" user via GraphQL
    * I log in as "guideStepMarker" user at "general" site via GraphQL
    * I open "general site landing" page
    When I click on "Guide" option
    * I accept cookies
    * I click on "Start Your Search" step at Guide Buying page
    * I click on "Mark step as Completed" button
    * I click on user avatar
    * I click on the "Sign out" button
    * I log in as "guideStepReviewer" user at "general" site via GraphQL
    * I open "general site landing" page
    * I click on "Guide" option
    Then I see "Start Your Search" step marked as completed

  @KWCON-25242
  Scenario: Verify guide step completion on command
    Given I register "guideStepCompleter" user via GraphQL
    * I claim agent as "guideStepCompleter" user via GraphQL
    * I log in as "guideStepCompleter" user at "general" site via GraphQL
    * I open "general site landing" page
    When I click on "Guide" option
    * I accept cookies
    * I open "Buying" tab
    * I click on "Start Your Search" step at Guide Buying page
    * I click on "Mark step as Completed" button
    * I open "Selling" tab
    * I click on "Review Offers before" step at Guide Buying page
    * I click on "Mark step as Completed" button
    * I open "command site contacts" page
    * I log in as agent
    Then I see contacts page welcome message
    When I select contact with "guideStepCompleter" email
    Then I see "Start Your Search 500" guide step completed in timeline
    * I see "Review Offers before" guide step completed in timeline

