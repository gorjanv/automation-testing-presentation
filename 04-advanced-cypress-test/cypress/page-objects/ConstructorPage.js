class ConstructorPage {
  checkPage() {
    cy.get('#welcome').contains('Make your own broodje!');
  }

  clickWhiteBread() {
    cy.get('#white-bread').click();
  }
  
  clickHam() {
    cy.get('#ham').click();
  }

  clickMake() {
    cy.get('#make').click();
  }

  checkIsSandwichMade() {
    cy.get('#image').should('be.visible');
  }
}

export default ConstructorPage;