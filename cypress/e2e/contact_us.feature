@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

  Background:
    Given I navigate to the web page "https://www.webdriveruniversity.com/"
    And I click on the contact us button

  Scenario: Valid "contact us" form submission
    When I type in a first name
    And I type in a last name
    And I enter an email address
    And I type in a comment
    And I click the submit button
    Then I should be presented with a successful contact us submission message

  Scenario: Invalid "contact us" form submission - missing email address
    When I type in a first name
    And I type in a last name
    And I type in a comment
    And I click the submit button
    Then I should get an error message: Error: Invalid email address

  Scenario: Invalid "contact us" form submission - missing first name
    When I type in a last name
    And I enter an email address
    And I type in a comment
    And I click the submit button
    Then I should get an error message: Error: all fields are required

  Scenario: Invalid "contact us" form submission - missing last name
    When I type in a first name
    And I enter an email address
    And I type in a comment
    And I click the submit button
    Then I should get an error message: Error: all fields are required

  Scenario: Invalid "contact us" form submission - missing comment
    When I type in a first name
    And I type in a last name
    And I enter an email address
    And I click the submit button
    Then I should get an error message: Error: all fields are required

  Scenario: Valid "contact us" form submission with provided values
    When I type in the first name "Willi"
    And I type in the last name "Wimmerl"
    And I enter the email address "willi@horsti.de"
    And I type in the comment "Der Willi ist jetzt auch da!"
    And I click the submit button
    Then I should be presented with a successful contact us submission message

  @smoke
  Scenario Outline: Validate "Contact Us" page with various inputs
    When I type in the first name "<firstName>"
    And I type in the last name "<lastName>"
    And I enter the email address "<emailAddress>"
    And I type in the comment "<comment>"
    And I click the submit button
    Then I should be presented with message: "<message>"

    Examples:
      | firstName | lastName | emailAddress     | comment                     | message                      |
      | Annerl    | Angerer  | annerl@horsti.de | Ja, das Annerl kommt mit!   | Thank You for your Message!  |
      | Traudl    | Trinkl   | traudl@horsti.de | Oje, die Traudl kommt auch! | XThank You for your Message!  |
      | Xaverl    | Xäler    | falsch           | Der Xare kann's nicht!      | XError: Invalid email address |
