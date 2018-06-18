class LoginPage {
  enterUserName(text) {
    cy.get('#user-name').type(text);
  }

  enterPassword(text) {
    cy.get('#password').type(text);    
  }

  submit() {
    cy.get('#submit').click();
  }
}

export default LoginPage;