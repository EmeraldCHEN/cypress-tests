export class Products {
  static productsPageTitle = '[data-test=secondary-header]';
  
  verifyProductsPageTitleVisible() {
    cy.get(Products.productsPageTitle).should('be.visible'); 
  }
}