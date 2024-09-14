export class Login {
  static userName ='[data-test=username]';
  static password = '[data-test=password]';
  static loginButton = '[data-test=login-button]';
  static errorMessage = '[data-test=error]';

  signin(usernameame, passcode) {
    cy.get(Login.userName).type(usernameame);
    cy.get(Login.password).type(passcode);
    cy.get(Login.loginButton).click();
  }

  verifyLoginPageUrl(loginPageUrl) {
    cy.url().then(url => {
      expect(url).to.eq(loginPageUrl)
    }) 
  }

  verifyLoginError(message) {
    cy.get(Login.errorMessage).should('contain', message); 
  }
}