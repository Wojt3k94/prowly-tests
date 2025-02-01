Feature: Google Search - Filter by Date

  Background:
    Given I am on the Google homepage

  Scenario: Searching "prowly" filtered by "Past 24 hours"
    When I enter "prowly" in the search bar
    And I click the search button
    And I filter results by "Past 24 hours"
    Then I should see results related to "prowly"

  Scenario: Searching "prowly" filtered by "Past week"
    When I enter "prowly" in the search bar
    And I click the search button
    And I filter results by "Past week"
    Then I should see results related to "prowly"

  Scenario: Searching "prowly" filtered by "Past year"
    When I enter "prowly" in the search bar
    And I click the search button
    And I filter results by "Past year"
    Then I should see results related to "prowly"  