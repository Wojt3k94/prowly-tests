Feature: Bing Search - Filter by Content Category

  Scenario: Search for "semrush" in the "Videos" category
    Given I am on the Bing homepage
    When I enter "semrush" in the search bar
    And I select the "Videos" category
    And I click the search button
    Then I should see video results related to "semrush"
    And the number of video results should be greater than 0

