import { constants } from "../../constants";
export class Menu {
  static coffeeEspressoImg = '[data-test=Espresso]';
  static coffeeMacchiatoImg = '[data-test=Espresso_Macchiato]';
  static coffeeMochaImg = '[data-test=Mocha]';
  static coffeeFlatWhiteImg = '[data-test=Flat_White]';
  static checkoutButton = '[data-test=checkout]';
  static successMessage = '.success';
  static itemNumberInCart = ':nth-child(2) > a';

  checkPageTitleIncludes(text) {
    cy.title().should('include', text);
  }

  addCoffeeToCart(coffee) {
    switch(coffee) {
      case constants.coffee.espresso:
        cy.get(Menu.coffeeEspressoImg).click();
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }
  }

  clickCheckoutButton() {
    cy.get(Menu.checkoutButton).click();
  }

  verifyCheckoutButtonVisibility() {
    cy.get(Menu.checkoutButton).should('be.visible');
  }

  validateCheckoutAmountIsGreaterThan(minimumAmount) {
    cy.get(Menu.checkoutButton)
    .invoke('text') // Get the text content of the element
    .then((amountText) => {
      // Remove any currency symbols or other formatting
      const amount = parseFloat(amountText.replace(/[^0-9.-]+/g, ''));
      // Assert that the amount is greater than the minimumAmount
      expect(amount).to.be.greaterThan(minimumAmount);
    });
  }

  verifyCoffeeImagesVisibility() {
    [Menu.coffeeEspressoImg, Menu.coffeeMacchiatoImg].forEach(selector => {
      cy.get(selector).should('be.visible');
    });
  }

  verifySuccessOrderMessage(message) {
    cy.get(Menu.successMessage).should('contain', message);
  }

  verifyItemNumberInCart(number) {
    cy.get(Menu.itemNumberInCart).should('contain', number);
  }
}