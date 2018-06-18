import { By } from 'selenium-webdriver';

class LoginPage {
  constructor(driver){
    this._driver = driver;
  }

  async enterUserName(text) {
    await this._driver.findElement(By.id('user-name')).sendKeys(text);
  }

  async enterPassword(text) {
    await this._driver.findElement(By.id('password')).sendKeys(text);
  }

  async submit() {
    await this._driver.findElement(By.id('submit')).click();
  }
}

export default LoginPage;