import {
  Login,
  Products
} from '../../support/page-helpers';
import { constants } from '../../support/constants';

describe('Saucedemo Login', () => { 
  const logIn = new Login();
  const products = new Products();
  const saucedemoUrl = Cypress.config('baseUrl');

  beforeEach(() => {
    cy.visit(saucedemoUrl);
  })
  
  it('should login with valid credentials', () => {
    logIn.signin(constants.usernames.standardUser, constants.passwords.validPassword)
    // Assertion to verify successful login
    products.verifyProductsPageTitleVisible()
    products.clickHamburgerMenuIcon();
    products.clickLogoutSidebarLink();
    logIn.verifyLoginPageUrl(saucedemoUrl);         
  });

  it('should not login with invalid credentials', () => {
    logIn.signin(constants.usernames.errorUser, constants.passwords.errorPassword); 
    logIn.verifyLoginError('do not match');
  });     
});
