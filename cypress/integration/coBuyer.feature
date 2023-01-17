@co-buyer
Feature: Co-Buyer

  @KWCON-4121
  @small_smoke
  Scenario: Invite a Co-Buyer
    Given I register "inviteCoBuyerInviteEmail" user via GraphQL
    * I create an account and login at "general" site via GraphQL
    * I open "general site landing" page
    When I click on user avatar
    * I click on "Co-buyer" option from dropdown
    * I fill out the invitation form with user data and "inviteCoBuyerInviteEmail" email
    * I click "Invite" button
    Then I see "Saved" info modal title
    When I click "Dismiss" button at info modal
    Then I see that Co-buyer added
    * I see Co-Buyer invite status is "Pending email invite"
    * I dont see invite co-buyer button

  @KWCON-4600
  @small_smoke
  Scenario: Rejecting pending invitation. Co-buyer
    Given I register "cancelCoBuyerInviteEmail" user via GraphQL
    * I create an account and login at "general" site via GraphQL
    * I open "general site landing" page
    When I click on user avatar
    * I click on "Co-buyer" option from dropdown
    * I fill out the invitation form with user data and "cancelCoBuyerInviteEmail" email
    * I click "Invite" button
    * I click "Dismiss" button at info modal
    * I click on user avatar
    * I click on the "Sign out" button
    * I log in as "cancelCoBuyerInviteEmail" user at "general" site via GraphQL
    * I open "general site landing" page
    * I click on user avatar
    * I click on "Co-buyer" option from dropdown
    * I click "Reject Invitation" button
    Then I dont see "Reject Invitation" button
    * I see invite co-buyer section

  @KWCON-4595
  @small_smoke
  Scenario: Accepting the invitation. Co-buyer
    Given I register "acceptCoBuyerInviteEmail" user via GraphQL
    * I create an account and login at "general" site via GraphQL
    * I open "general site landing" page
    When I click on user avatar
    * I click on "Co-buyer" option from dropdown
    * I fill out the invitation form with user data and "acceptCoBuyerInviteEmail" email
    * I click "Invite" button
    * I click "Dismiss" button at info modal
    * I click on user avatar
    * I click on the "Sign out" button
    * I log in as "acceptCoBuyerInviteEmail" user at "general" site via GraphQL
    * I open "general site landing" page
    * I click on user avatar
    * I click on "Co-buyer" option from dropdown
    * I click "Accept Invitation" button
    Then I see invitation Accepted
    * I see the two users are "Linked as Co-Buyer"

  @KWCON-4122
  @small_smoke
  Scenario: Remove Co-Buyer
    Given I register "acceptCoBuyerInviteEmail" user via GraphQL
    * I register "knownUserEmail" user via GraphQL
    * I log in as "knownUserEmail" user at "general" site via GraphQL
    * I open "general site landing" page
    When I click on user avatar
    * I click on "Co-buyer" option from dropdown
    * I fill out the invitation form with user data and "acceptCoBuyerInviteEmail" email
    * I click "Invite" button
    * I click "Dismiss" button at info modal
    * I click on user avatar
    * I click on the "Sign out" button
    * I log in as "acceptCoBuyerInviteEmail" user at "general" site via GraphQL
    * I open "general site landing" page
    * I click on user avatar
    * I click on "Co-buyer" option from dropdown
    * I click "Accept Invitation" button
    Then I see invitation Accepted
    * I click on user avatar
    * I click on the "Sign out" button
    When I log in as "knownUserEmail" user at "general" site via GraphQL
    * I open "general site landing" page
    * I click on user avatar
    * I click on "Co-buyer" option from dropdown
    * I click 'Remove Co-Buyer' button at Co-buyer tab
    * I click 'Remove' button at modal user
    * I click "Dismiss" button at info modal
    Then I do not see 'Remove Co-Buyer' button
    * I see invite co-buyer section