
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the Draw button displays the div with id = "choices"', async () => {
    const drawButton = document.querySelector('#draw-button');
    const choicesDiv = document.querySelector('#choices');
    choicesDiv.style.display = 'none';
    drawButton.click(); await sleep(3000);
    expect(choicesDiv.style.display).toBe('block');
  });

  test('clicking an "Add to Duo" button displays the div with id = "player-duo"', async () => {
    const addButton = document.querySelector('.add-to-duo-button');
    const playerDuoDiv = document.querySelector('#player-duo');
    playerDuoDiv.style.display = 'none';
    addButton.click(); await sleep(3000);
    expect(playerDuoDiv.style.display).toBe('block');
  });