/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(/I (type in|enter) a first name/, () => {
    cy.get("[name=first_name]").type("Hansi");
});

When(/I (type in|enter) a last name/, () => {
    cy.get("[name=last_name]").type("Hampelmann");
});

When(/I (type in|enter) an email address/, () => {
    cy.get("[name=email]").type("hansi@horsti.de");
});

When(/I (type in|enter) a comment/, () => {
    cy.get("[name=message]").type("Der Hansi war da!");
});

When(/I click the submit button/, () => {
    cy.get("form").submit();
});

Then(/I should be presented with a successful contact us submission message/, () => {
    cy.get("h1").contains("Thank You for your Message!").should("exist");
});

Then(/I should get an error message: (.*)/, (errorMessage) => {
    cy.get("body").contains(errorMessage);
});