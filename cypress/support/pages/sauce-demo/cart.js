export class Cart {
  static checkoutButton = '.btn_checkout';

  clickCheckoutButton() {
    cy.get(Cart.checkoutButton).click();
  }
}