import { Menu, Cart } from '../../support/pages/coffee-site';
import { constants } from '../../support/constants';
  
describe('Coffee Site Tests - Order Coffee', () => {
  const menu = new Menu();
  const cart = new Cart();

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrlCoffeeSite'));
    menu.addCoffeeToCart(constants.coffee.espresso);
    menu.validateCheckoutAmountIsGreaterThan(9.9);
  });


  it('adds the coffee to cart and chekout to order the coffee', () => {
    cart.clickCartIcon();
    cart.verifyItemInCart(constants.coffee.espresso);
    cart.clickCheckoutButton();
    cart.enterNameInCoffeeOrderingForm('Coffee XYZ');
    cart.enterEmailInCoffeeOrderingForm(constants.coffeeOrderEmail.valid);
    cart.submitPayment();
    menu.verifySuccessOrderMessage(constants.message.successCoffeeOrder);
    menu.verifyItemNumberInCart(0);
  });

  it('should not be able to order coffee with an invalid email', () => {
    menu.clickCheckoutButton();
    cart.enterNameInCoffeeOrderingForm('XYZ');
    cart.enterEmailInCoffeeOrderingForm(constants.coffeeOrderEmail.invalid);
    cart.submitPayment();
    cart.verifyCoffeeOrderingFormSectionContains('Payment details');
    cart.closeCoffeeOrderingForm();
    menu.verifyItemNumberInCart(1);
  });

  it('should validate required fields', () => {
    // Submit the form without filling it
    menu.clickCheckoutButton();
    cart.submitPayment();
    cart.verifyEmptyNameInput();
    cart.verifyEmptyEmailInput();
    cart.closeCoffeeOrderingForm();
    menu.verifyItemNumberInCart(1);
  });
});
