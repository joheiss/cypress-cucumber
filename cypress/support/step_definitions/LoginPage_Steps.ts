/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPagePO } from "../page-objects/LoginPagePO";

const loginPage = new LoginPagePO();

let stub;

Given(/I navigate to the login page/, () => {
  loginPage.navigateToLoginPage();
});
When(/I (?:type in|enter) the user name "(.*)"/, (userName:string) => {
  loginPage.enterUsername(userName);
});

When(/I (?:type in|enter) the password "(.*)"/, (password:string) => {
  loginPage.enterPassword(password);
});

When(/I click the login button/, () => {
  stub = cy.stub();
  cy.on("window:alert", stub);
  loginPage.clickOnLoginButton();
});

Then(/I should get an alert message: "(.*)"/, (alertMessage:string) => {
  //expect(stub).to.have.been.calledWith(alertMessage);
  cy.wrap(stub).should("have.been.calledWith", alertMessage);
});
