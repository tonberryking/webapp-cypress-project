Feature: Marmelab Login

    Scenario: Verify login
        Given I navigate to the login page
        When I enter username "test@qaa.com" and password "111111" and click Sign In button
        Then I should be logged in as "Jane Doe"

    Scenario: Search a poster
        Given I already logged in
        When I navigate to the posters page and search for "Alone Jogger"
        Then I verify the 1st image name "Alone Jogger"

    Scenario: Add new customer
        Given I already logged in
        When I navigate to the customers page and click create button
        And I enter customer information then click save
        | firstname | lastname | email         | birthday   | address  | city  | state  | zipcode | password |
        | first     | last     | test2@qaa.com | 1989-05-19 | address1 | city1 | state1 | 123456  | 222222   |
        Then I navigate back to customers page and verify new customer name "first last"
  