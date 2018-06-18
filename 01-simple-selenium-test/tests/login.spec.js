import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Log In', () => {
  let driver;

  it('Open browser', async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('Go to web site', async () => {
    await driver.get('http://localhost:3000/');
  });

  it('Enter user name', async () => {
    await driver.wait(until.elementLocated(By.id('user-name')), 1000);
    await driver
      .findElement(By.id('user-name'))
      .sendKeys('admin@testapp.com');
  });

  it('Enter password', async () => {
    await driver.wait(until.elementLocated(By.id('password')), 1000);
    await driver
      .findElement(By.id('password'))
      .sendKeys('secret');
  });

  it('Click on submit', async () => {
    await driver.wait(until.elementLocated(By.id('submit')), 1000);
    await driver
      .findElement(By.id('submit'))
      .click();
  });

  it('Check brodje constructor page', async () => {
    await driver.wait(until.elementLocated(By.id('welcome')), 1000);
    const text = await driver
      .findElement(By.id('welcome'))
      .getText();

    expect(text).to.be.equal('Make your own broodje!');
  });

  it('Select white bread', async () => {
    await driver.wait(until.elementLocated(By.id('white-bread')), 1000);
    await driver
      .findElement(By.id('white-bread'))
      .click();
  });

  it('Select ham', async () => {
    await driver.wait(until.elementLocated(By.id('ham')), 1000);
    await driver
      .findElement(By.id('ham'))
      .click();
  });

  it('Click on make', async () => {
    await driver.wait(until.elementLocated(By.id('make')), 1000);
    await driver
      .findElement(By.id('make'))
      .click();
  });

  it('Check sandwich image', async () => {
    await driver.wait(until.elementLocated(By.id('image')), 5000);
    const displayed = await driver
      .findElement(By.id('image'))
      .isDisplayed();

    expect(displayed).to.be.true;
  });

  it('Close browser', async () => {
    await driver.quit();
  });
});