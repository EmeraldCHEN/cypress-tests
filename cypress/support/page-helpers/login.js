export class Login {
  static userName ='[data-test=username]';
  static password = '[data-test=password]';
  static loginButton = '[data-test=login-button]'

  signin(usernameame, passcode) {
    cy.get(Login.userName).type(usernameame);
    cy.get(Login.password).type(passcode);
    cy.get(Login.loginButton).click();
  }
}