import { Menu } from '../../support/pages/coffee-site';

describe('Coffee Site Tests - Menu Page', () => {
  const menu = new Menu();

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrlCoffeeSite'));
  });

  it('should load the page correctly', () => {
    menu.checkPageTitleIncludes('Coffee');
    menu.verifyCheckoutButtonVisibility();
  });

  it('should load coffee images correctly', () => { 
    menu.verifyCoffeeImagesVisibility()
  });
});
