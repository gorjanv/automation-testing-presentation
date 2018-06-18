import LoginPage from '../page-objects/LoginPage';
import ConstructorPage from '../page-objects/ConstructorPage';

describe('Log In', () => {
  let loginPage;
  let constructorPage;
  
  it('Go to website', () => {
    cy.visit('/');
    loginPage = new LoginPage();
  })

  it('Enter username', () => {
    loginPage.enterUserName('admin@testapp.com');
  });

  it('Enter password', () => {
    loginPage.enterPassword('secret');
  });

  it('Click the login button', () => {
    loginPage.submit();
  });

  it('Check brodje constructor page', () => {
    constructorPage = new ConstructorPage();
    constructorPage.checkPage();
  });

  it('Select white bread', () => {
    constructorPage.clickWhiteBread();    
  });

  it('Select ham', () => {
    constructorPage.clickHam();
  });

  it('Click on make', () => {
    constructorPage.clickMake();
  });

  it('Check sandwich image', () => {
    constructorPage.checkIsSandwichMade();
  });
})