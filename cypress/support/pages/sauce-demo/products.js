export class Products {
  static productsPageTitle = '[data-test=secondary-header]';
  static hamburgerMenuIcon = '.bm-burger-button';
  static logoutSidebarLink = '[data-test=logout-sidebar-link]';
  static firstAddToCartButton = '.btn_add_to_cart';
  static shoppingCartLink = '.shopping_cart_link';
  
  verifyProductsPageTitleVisible() {
    cy.get(Products.productsPageTitle).should('be.visible'); 
  }

  clickHamburgerMenuIcon() {
    cy.get(Products.hamburgerMenuIcon).click();
  }

  clickLogoutSidebarLink() {
    cy.get(Products.logoutSidebarLink).click();
  }

  addFirstItemToCart() {
    cy.get(Products.firstAddToCartButton).first().click();
  }

  clickShoppingCartLink() {
    cy.get(Products.shoppingCartLink).click();
  }
}