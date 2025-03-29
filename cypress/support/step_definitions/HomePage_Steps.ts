/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { HomePagePO } from "../page-objects/HomePagePO";

const homePage = new HomePagePO();

const url = `https://www.webdriveruniversity.com/`;

Given(/I navigate to the webdriveruniversity homepage/, () => {
  homePage.navigateToHomePage();
});

Given(/I navigate to the web page "(.*)"/, (webUrl:string) => {
  cy.visit(webUrl);
});

When(/I click on the contact us button/, () => {
  // cy.get("#contact-us").invoke("removeAttr", "target").click();
  // cy.clickAndOpenLinkInSameTab("#contact-us");
  homePage.clickOnContactUsButton();
});

When(/I click on the login button/, () => {
  // cy.get("#login-portal").invoke("removeAttr", "target").click();
  // cy.clickAndOpenLinkInSameTab("#login-portal");
  homePage.clickOnLoginButton();
});
