describe('Coffee Site Tests - Menu Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrlCoffeeSite'));
  });

  it('should load the page correctly', () => {
    cy.title().should('include', 'Coffee');
    cy.get('button').should('be.visible');
  });

  it('should load coffee images correctly', () => {
    // Check if coffee images are visible
    cy.get('[data-test=Espresso]').should('be.visible');
    cy.get('[data-test=Espresso_Macchiato]').should('be.visible');
    cy.get('[data-test=Mocha]').should('be.visible');
    cy.get('[data-test=Flat_White]').should('be.visible');
  });
});
