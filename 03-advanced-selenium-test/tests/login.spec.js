import { Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import LoginPage from '../src/page-objects/LoginPage';
import ConstructorPage from '../src/page-objects/ConstructorPage';
import screenshotMaker from '../src/utils/screenshotMaker';

describe('Log In', () => {
  let driver;
  let loginPage;
  let constructorPage;

  const scm = screenshotMaker();
  const url = process.env.BASE_URL || 'http://localhost:3000/';
  const isHeadless = process.env.HEADLESS === 'true';

  before(async () => {
    const options = new Options();
    
    if(isHeadless) {
      options.addArguments(['--headless', '--disable-gpu']);
    }

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
    driver.manage().setTimeouts({ implicit: 10000 });
  });

  after(async () => {
    await driver.quit();
  });

  afterEach(async () => {
    await scm(driver);
  });

  // ============ TEST

  it('Go to web site', async () => {
    await driver.get(url);
    loginPage = new LoginPage(driver);
  });

  it('Enter user name', async () => {
    await loginPage.enterUserName('admin@testapp.com');
  });

  it('Enter password', async () => {
    await loginPage.enterPassword('secret');
  });

  it('Click on submit', async () => {
    await loginPage.submit();
  });

  it('Check brodje constructor page', async () => {
    constructorPage = new ConstructorPage(driver);
    await constructorPage.checkPage();
  });

  it('Select white bread', async () => {
    await constructorPage.clickWhiteBread();
  });

  it('Select ham', async () => {
    await constructorPage.clickHam();
  });

  it('Click on make', async () => {
    await constructorPage.clickMake();
  });

  it('Check sandwich image', async () => {
    await constructorPage.checkIsSandwichMade();
  });
});