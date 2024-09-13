export class Menu {
  static checkoutButton = '.btn_checkout';

  clickCheckoutButton() {
    cy.get(Cart.checkoutButton).click();
  }
}