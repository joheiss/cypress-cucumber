import { BasePO } from "./BasePO";

export class HomePagePO extends BasePO {
 
  public navigateToHomePage() {
    super.navigate();
  }

  public clickContactUsButton() {
    cy.clickAndOpenLinkInSameTab("#contact-us");
  }

  public clickLoginButton() {
    cy.clickAndOpenLinkInSameTab("#login-portal");
  }
}