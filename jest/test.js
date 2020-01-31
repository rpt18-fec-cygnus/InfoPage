const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:7000'

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({width, height});
});

afterAll(() => {
  browser.close();
});

describe('Main Page', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'})
  })

  test ('Get stars', async () => {
    var div = 'img'
    const srcUrl = await page.$eval(div, el => el.getAttribute('src'));  
    expect(srcUrl).toEqual('https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/small_4.png')
  })
})

