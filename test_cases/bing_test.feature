Feature: Bing Search - Filter by Content Category

  Background:
    Given I am on the Bing homepage

  Scenario: Searching "semrush" and verifying top video results
    When I enter "semrush" in the search bar
    And I select the "Videos" category
    And I click the search button
    Then I should see video results related to "semrush"
    And at least one result should have "Semrush" in the title or description
  
  Scenario: Searching "semrush" and verifying top news results
    When I enter "semrush" in the search bar
    And I select the "News" category
    And I click the search button
    Then I should see news articles related to "semrush"
    And at least one result should have a publication date within the last 7 days

  Scenario: Searching "semrush" and verifying top image results
    When I enter "semrush" in the search bar
    And I select the "Images" category
    And I click the search button
    Then I should see image results related to "semrush"
    And at least one result should have "Semrush" in the alt text or description


