/// <reference types="cypress" />

import { After, Before, When } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Before hook executed - before each scenario");
  cy.clearLocalStorage();
  cy.fixture("config.json").as("config");
});

Before({ tags: "@smoke" }, () => {
  cy.log(
    "You can have multiple Before/After hooks, and you can assign them to a tag"
  );
});

After(() => {
  cy.log("After hook executed - after each scenario");
});

When("I wait for {int} milliseconds", (milliseconds: number) => {
  cy.wait(milliseconds);
});
