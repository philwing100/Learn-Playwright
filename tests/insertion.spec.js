import {test,expect} from '@playwright/test';

test.describe('Learn assertions', () =>{
    test('Verify web page behavior', async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com')

        //1. to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com')
        
        await page.pause();

        //Expect to have title
        await expect(page).toHaveTitle('The Internet');


    })

    test('Continues with assertions', async({page}) => {
        await page.goto('https://the-internet.herokuapp.com')

        //Assert visibility
        await expect(page.locator('h1')).toBeVisible()

        //Text assertion
        await expect(page.locator('h2')).toContainText('le')
    })

    test('Continue with assertions part 2', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes')
        //assert count
        //await expect(page.locator('a')).toHaveCount(46);
       //First box await page.getByRole('checkbox').first().uncheck();
       //Second box await page.getByRole('checkbox').nth(1).uncheck();

       await page.waitForTimeout(1000);
       await page.waitForLoadState('networkidle');
        let checkbox = await page.getByRole('checkbox').nth(0);
        await checkbox.waitFor()

       await page.getByRole('checkbox').nth(0).uncheck();
       await page.getByRole('checkbox').nth(1).check();
       await page.getByRole('checkbox').nth(0).check();

       await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
       await expect(page.getByRole('checkbox').nth(1)).toBeChecked();


    })
    test('Continue with assertions part 3', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/')
       // await page.locator('#username').fill('tomsmith')
       // await expect(page.locator('#username')).toHaveValue('tomsmith');

        //Check if element is enabled
        //await expect(page.locator('button[type="submit"]')).toBeDisabled();

        const headerText = await page.locator('h1').textContent()
        expect(headerText).toBe('Welcome to the-internet')
        //So if something doesnt have await then it takes forever to run

    })

})