import { By } from 'selenium-webdriver';
import { expect } from 'chai';

class ConstructorPage {
  constructor(driver){
    this._driver = driver;
  }

  async checkPage() {
    const text = await this._driver.findElement(By.id('welcome')).getText();
    expect(text).to.be.equal('Make your own broodje!');
  }

  async clickWhiteBread() {
    await this._driver.findElement(By.id('white-bread')).click();
  }
  
  async clickHam() {
    await this._driver.findElement(By.id('ham')).click();
  }

  async clickMake() {
    await this._driver.findElement(By.id('make')).click();
  }

  async checkIsSandwichMade() {
    const displayed = await this._driver
      .findElement(By.id('image'))
      .isDisplayed();

    expect(displayed).to.be.true;
  }
}

export default ConstructorPage;