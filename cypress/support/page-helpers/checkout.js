export class Checkout {
  static firstName = '#first-name';
  static lastName = '#last-name';
  static postalCode = '#postal-code';
  static continueButton = '#continue-button';
  static checkoutCompleteHeader = '.checkout_complete_header';

  fillOutCheckoutInfo(firstName, lastName, postalCode) {
    cy.get(Checkout.firstName).type(firstName);
    cy.get(Checkout.lastName).type(lastName);
    cy.get(Checkout.postalCode).type(postalCode);
    cy.get(Checkout.continueButton).click();
  }   

  clickContinueButton() {
    cy.get(Checkout.continueButton).click();
  }

  verifySuccessfulCheckout() {
    cy.get(Checkout.checkoutCompleteHeader).should('contain.text', 'THANK YOU FOR YOUR ORDER');
  }
}