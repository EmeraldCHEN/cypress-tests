import {
  Login,
  Products
} from '../../support/page-helpers';

describe('Saucedemo Login', () => { 
  const logIn = new Login();
  const products = new Products();

  const usernames = {
    standardUser: 'standard_user',
    errorUser: 'error_user'
  }
  const passwords = {
    validPassword: 'secret_sauce',
    errorPassword: 'error_P'
  }
  const saucedemoUrl = Cypress.config('baseUrl');

    beforeEach(() => {
      cy.visit(saucedemoUrl);
    })
  
    it('should login with valid credentials', () => {
        logIn.signin(usernames.standardUser, passwords.validPassword)
        // Assertion to verify successful login
        products.verifyProductsPageTitleVisible()
        cy.get('.bm-burger-button').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.url().then(url => {
          expect(url).to.eq(saucedemoUrl)
        })       
     });

     it('should not login with invalid credentials', () => {
      logIn.signin(usernames.errorUser, passwords.errorPassword); 
      cy.get('[data-test=error]').should('contain', 'do not match');       
   });
       
});
