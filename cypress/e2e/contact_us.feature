Feature: WebdriverUniversity - Contact Us Page

  Scenario: Valid "contact us" form submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type in a first name
    And I type in a last name
    And I enter an email address
    And I type in a comment
    And I click the submit button
    Then I should be presented with a successful contact us submission message

  Scenario: Invalid "contact us" form submission - missing email address
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type in a first name
    And I type in a last name
    And I type in a comment
    And I click the submit button
    Then I should get an error message: Error: Invalid email address

  Scenario: Invalid "contact us" form submission - missing first name
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type in a last name
    And I enter an email address
    And I type in a comment
    And I click the submit button
    Then I should get an error message: Error: all fields are required

  Scenario: Invalid "contact us" form submission - missing last name
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type in a first name
    And I enter an email address
    And I type in a comment
    And I click the submit button
    Then I should get an error message: Error: all fields are required

  Scenario: Invalid "contact us" form submission - missing comment
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I type in a first name
    And I type in a last name
    And I enter an email address
    And I click the submit button
    Then I should get an error message: Error: all fields are required
