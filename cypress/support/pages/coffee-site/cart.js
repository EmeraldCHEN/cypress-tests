export class Cart {
  static cart = ':nth-child(2) > a';
  static listItem = '.list-item';
  static checkoutButton = '[data-test=checkout]';
  static nameInput = '#name';
  static emailInput = '#email';
  static coffeeOrderingFormSection = 'section';
  static submitPaymentButton = '#submit-payment';
  static closeCoffeeOrderingForm = '.close';

  clickCartIcon() {
    cy.get(Cart.cart).click();
  }

  verifyItemInCart(item) {
    cy.get(Cart.listItem).should('contain', item);
  }

  clickCheckoutButton() {
    cy.get(Cart.checkoutButton).click();
  }

  enterNameInCoffeeOrderingForm(name) {
    cy.get(Cart.nameInput).type(name);
  }

  enterEmailInCoffeeOrderingForm(email) {
    cy.get(Cart.emailInput).type(email);
  }

  submitPayment() {
    cy.get(Cart.submitPaymentButton).click();
  }

  closeCoffeeOrderingForm() {
    cy.get(Cart.closeCoffeeOrderingForm).click();
  }

  verifyCoffeeOrderingFormSectionContains(text) {
    cy.get(Cart.coffeeOrderingFormSection).should('be.visible').and('contain', text);
  }

  verifyEmptyNameInput() {
    cy.get(Cart.nameInput).should('have.value', '');
  }

  verifyEmptyEmailInput() {
    cy.get(Cart.emailInput).should('have.value', '');
  }
}