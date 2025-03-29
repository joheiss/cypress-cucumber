import { BasePO } from "./BasePO";

export class ContactUsPagePO extends BasePO {

  public navigateToContactUsPage() {
    super.navigate("Contact-Us/contactus.html");
  }

  public enterFirstName(firstName:string) {
    cy.get("[name=first_name]").type(firstName);
  }

  public enterLastName(lastName:string) {
    cy.get("[name=last_name]").type(lastName);
  }

  public enterEmailAddress(emailAddress:string) {
    cy.get("[name=email]").type(emailAddress);
  }

  public enterComment(comment:string) {
    cy.get("[name=message]").type(comment);
  }

  public submit() {
    cy.get("form").submit();
  }

  public validateSuccessfulSubmit() {
    cy.get("h1").contains("Thank You for your Message!").should("exist");
  }

  public validateMessage(message) {
    cy.get("body").contains(message);
  }

  public validateErrorMessage(errorMessage) {
    cy.get("body").contains(errorMessage);
  }
}
