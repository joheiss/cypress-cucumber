import { BasePO } from "./BasePO";

export class HomePagePO extends BasePO {
 
  public navigateToHomePage() {
    super.navigate();
  }

  public clickOnContactUsButton() {
    cy.clickAndOpenLinkInSameTab("#contact-us");
  }

  public clickOnLoginButton() {
    cy.clickAndOpenLinkInSameTab("#login-portal");
  }
}