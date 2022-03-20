const pupt = require('puppeteer');
const qut = require('./answer.js');
const id='fesagom584@chatich.com';
const pass='pepcoding123';
async function hackerrankauto(){

try {
console.log("before");
let bser=await pupt.launch({ headless: false, defaultViewport: null, rgs: ['--start-maximized'] });
let page=await  bser.newPage();
await page.goto('https://www.hackerrank.com/auth/login');
await page.type('[id="input-1"]',id);
await page.type('[id="input-2"]',pass);
await page.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled .ui-text');
await page.waitForSelector('[data-automation="algorithms"]');
await page.click('[data-automation="algorithms"]');
await page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
await page.click('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
await page.waitForSelector('[type="checkbox"]');
await page.click('[type="checkbox"]');
await page.type('.input.text-area.custominput.auto-width',qut.str[0]);
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.press('C');
await page.click('.monaco-scrollable-element.editor-scrollable.vs');
await page.keyboard.press('A');
await page.keyboard.press('V');
await page.keyboard.down('Control');
await page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled');

} catch (error) {
  console.log(error);  
}


};

hackerrankauto();