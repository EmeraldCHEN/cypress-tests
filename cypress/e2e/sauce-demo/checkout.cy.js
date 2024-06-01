import {
  Login,
  Products,
  Cart,
  Checkout
} from '../../support/page-helpers';
import { constants } from '../../support/constants';

describe('Saucedemo checkout in a mobile browser', () => { 
  const logIn = new Login();
  const products = new Products();
  const cart = new Cart();
  const checkout= new Checkout();

  it('should allow checkout of a product', () => {
    cy.viewport('iphone-xr');
    cy.visit(Cypress.config('baseUrl'));
    logIn.signin(constants.usernames.standardUser, constants.passwords.validPassword)
    products.addFirstItemToCart();
    products.clickShoppingCartLink();
    cart.clickCheckoutButton();
    checkout.fillOutCheckoutInfo('John', 'Doe', '123456');
    checkout.clickContinueButton();
    checkout.verifySuccessfulCheckout();
  });      
});