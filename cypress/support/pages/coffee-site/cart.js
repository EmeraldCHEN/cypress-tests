export class Cart {
  static cart = ':nth-child(2) > a';
  static listItem = '.list-item';
  static checkoutButton = '[data-test=checkout]';

  clickCart() {
    cy.get(Cart.cart).click();
  }

  checkCartContains(item) {
    cy.get(Cart.listItem).should('contain', item);
  }

  clickCheckoutButton() {
    cy.get(Cart.checkoutButton).click();
  }
}