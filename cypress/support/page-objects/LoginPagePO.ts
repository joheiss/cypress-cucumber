import { BasePO } from "./BasePO";

export class LoginPagePO extends BasePO {
    
  public navigateToLoginPage() {
    super.navigate("Login-Portal/index.html");
  }

  public enterUsername(username: string) {
    cy.get("#text").type(username);
  }

  public enterPassword(password: string) {
    cy.get("#password").type(password);
  }

  public clickOnLoginButton() {
    cy.get("#login-button").click();
  }
}
