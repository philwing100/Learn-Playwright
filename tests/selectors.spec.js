import {test, expect} from '@playwright/test';

test("Learning selectors", async ({page}) => {
    await page.goto('http://127.0.0.1:5500/clickMe.html');
    let x= 0;
    //By id
    await page.locator('#clickButton').click();

    //Select by class
    await page.locator('.button-style').click();

    //tag and class
    await page.locator('button.button-style').click();

    //attribute value
    await page.locator('[data-action="increment"]').click();


    //*= will get anything inside the ""
    await page.locator('[role*="butt"]').click()

    //by text visible to user
    await page.locator('text=CLICK ME').click()

    //7 combine seletors for precision
    await page.locator('.button-style:text("CLICK ME")').click()

    //8 has-text aka case insensitive and partial matching
    await page.locator('button:has-text("CLICK m")').click()

    //9
    await page.locator('[data-action="increment"]:text("CLICK ME")').click()

    //10 playwright locators, get by text
    await page.getByText('CLICK ME').click();

    //11 get by role
    await page.getByRole('button', {name: /click me/i}).click();

    await expect(page.locator('#counter')).toContainText('11');


});