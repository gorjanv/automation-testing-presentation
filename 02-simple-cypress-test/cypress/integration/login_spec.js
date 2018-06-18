describe('Log In', () => {
  it('Go to website', () => {
    cy.visit('http://localhost:3000');
  })

  it('Enter username', () => {
    cy.get('#user-name').type('admin@testapp.com');
  });

  it('Enter password', () => {
    cy.get('#password').type('secret');
  });

  it('Click the login button', () => {
    cy.get('#submit').click();
  });

  it('Check brodje constructor page', () => {
    cy.get('#welcome').contains('Make your own broodje!');
  });

  it('Select white bread', () => {
    cy.get('#white-bread').click();
  });

  it('Select ham', () => {
    cy.get('#ham').click();
  });

  it('Click on make', () => {
    cy.get('#make').click();
  });

  it('Check sandwich image', () => {
    cy.get('#image').should('be.visible');
  });
})