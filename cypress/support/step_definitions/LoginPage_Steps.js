/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When(/I (?:type in|enter) the user name "(.*)"/, (userName) => {
  cy.get("#text").type(userName);
});

When(/I (?:type in|enter) the password "(.*)"/, (password) => {
  cy.get("#password").type(password);
});

When(/I click the login button/, () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  cy.get("#login-button").click();
});

Then(/I should get an alert message: "(.*)"/, (alertMessage) => {
  //expect(stub).to.have.been.calledWith(alertMessage);
  cy.wrap(stub).should("have.been.calledWith", alertMessage);
});
