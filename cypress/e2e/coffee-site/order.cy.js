import { Menu, Cart } from '../../support/pages/coffee-site';
import { constants } from '../../support/constants';
  
describe('Coffee Site Tests - Order Coffee', () => {
  const menu = new Menu();
  const cart = new Cart();

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrlCoffeeSite'));
  });


  it.only('adds the coffee to cart and chekout', () => {
    menu.addCoffeeToCart(constants.coffee.espresso);
    menu.validateCheckoutAmountIsGreaterThan(9.9);
    cart.clickCart();
    cart.checkCartContains(constants.coffee.espresso);
    cart.clickCheckoutButton();
  });

  it('should interact with the coffee ordering form', () => {
    // Fill in the order form
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    
    // Select coffee size
    cy.get('select[name="size"]').select('Large');
    
    // Check extra options
    cy.get('input[name="extra"]').check('Milk');
    cy.get('input[name="extra"]').check('Sugar');
    
    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify submission success message
    cy.get('.message').should('contain', 'Thank you for your order');
  });

  it('should validate required fields', () => {
    // Try to submit the form without filling it
    cy.get('button[type="submit"]').click();
    
    // Verify error messages for required fields
    cy.get('input[name="name"] + .error').should('contain', 'Name is required');
    cy.get('input[name="email"] + .error').should('contain', 'Email is required');
  });

  it('should validate email format', () => {
    // Enter an invalid email
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('button[type="submit"]').click();

    // Verify email format error message
    cy.get('input[name="email"] + .error').should('contain', 'Invalid email format');
  });
});
