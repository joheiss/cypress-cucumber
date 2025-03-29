/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { ContactUsPagePO } from "../page-objects/ContactUsPagePO";

const contactUsPage = new ContactUsPagePO();

Given(/I navigate to the contact us page/, () => {
  contactUsPage.navigateToContactUsPage();
});

When(/I (?:type in|enter) a first name/, () => {
  contactUsPage.enterFirstName("Hansi");
});

When(/I (?:type in|enter) a last name/, () => {
  contactUsPage.enterLastName("Hampelmann");
});

When(/I (?:type in|enter) an email address/, () => {
  contactUsPage.enterEmailAddress("hansi@horsi.de");
});

When(/I (?:type in|enter) a comment/, () => {
  contactUsPage.enterComment("Der Hansi war da!");
});

When(/I (?:type in|enter) the first name "(.*)"/, (firstName:string) => {
  contactUsPage.enterFirstName(firstName);
});

When(/I (?:type in|enter) the last name "(.*)"/, (lastName:string) => {
  contactUsPage.enterLastName(lastName);
});

When(/I (?:type in|enter) the email address "(.*)"/, (emailAddress:string) => {
  contactUsPage.enterEmailAddress(emailAddress);
});

When(/I (?:type in|enter) the comment "(.*)"/, (comment:string) => {
  contactUsPage.enterComment(comment);
});

When(/I click the submit button/, () => {
  contactUsPage.submit();
});

Then(
  /I should be presented with a successful contact us submission message/,
  () => {
    contactUsPage.validateSuccessfulSubmit();
  }
);

Then(/I should get an error message: (.*)/, (errorMessage:string) => {
  contactUsPage.validateErrorMessage(errorMessage);
});

Then(/I should be presented with message: "(.*)"/, (message:string) => {
  contactUsPage.validateMessage(message);
});
