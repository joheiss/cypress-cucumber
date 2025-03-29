export abstract class BasePO {

  getPageTitle() {
    return cy.title();
  }
  navigate(path?: string) {
    cy.get("@config").then((config: any) => cy.visit(config.baseUrl + (path || "")));
  }
}
