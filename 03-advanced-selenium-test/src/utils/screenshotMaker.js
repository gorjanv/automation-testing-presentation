import { writeFileSync } from 'fs';
import { resolve } from 'path';

const initialPath = process.env.SCREENSHOTS || resolve(__dirname, '../../screenshots/');

export default () => {
  let counter = 1;

  return async (driver) => {
    const base64png = await driver.takeScreenshot();
    const filePath = resolve(initialPath, `${counter}.png`);
    writeFileSync(filePath, base64png, 'base64');
    counter += 1;
  }
};