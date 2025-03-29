@login @regression
Feature: WebdriverUniversity - Login

  Background:
    # Given I navigate to the web page "https://www.webdriveruniversity.com/"
    # And I click on the login button
    Given I navigate to the login page

  @smoke
  Scenario Outline: Validate "Login Page" with valid and invalid  username / password combinations
    When I type in the user name "<userName>"
    And I type in the password "<password>"
    And I click the login button
    Then I should get an alert message: "<message>"

    Examples:
      | userName  | password     | message              |
      | webdriver | webdriver123 | validation succeeded |
      | webdriver | falsch       | validation failed    |
      | falsch    | webdriver123 | validation failed    |
      | falsch    | falsch       | validation failed    |
