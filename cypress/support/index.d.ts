/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    clickAndOpenLinkInSameTab(value: string): Chainable<any>;
  }
}