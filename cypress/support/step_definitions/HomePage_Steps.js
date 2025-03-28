/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = `https://www.webdriveruniversity.com/`;

Given(/I navigate to the webdriveruniversity homepage/, () => {
    cy.visit(url);
});

Given(/I navigate to the web page "(.*)"/, (webUrl) => {
    cy.visit(webUrl);
});

When(/I click on the contact us button/, () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
});

When(/I click on the login button/, () => {
    cy.get("#login-portal").invoke("removeAttr", "target").click();
});