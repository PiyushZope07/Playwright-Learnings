import {test,expect} from '@playwright/test'

test("Css Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    //Css With ID
    await page.locator('#username').fill('Piyush');
    await page.locator('#username').clear();

    //Css With Class
    await page.locator('.form-group>>input#email').fill('Piyush');
    await page.locator('.form-group>>input#email').clear();

    //Css With attribute
    await page.locator("input[id='username']").fill('ZOPE');
    await page.locator("input[id='username']").clear();

    //Combining selectors
    await page.locator(".card button:has-text('Submit Form')").click();

})

test("Xpath Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    //Contains() function
    await page.locator("//input[contains(@id,'username')]").fill('Piyush');
    await page.locator("//input[contains(@id,'username')]").clear();

    //contains text ()
    await page.locator("//button[contains(text(),'Submit Form')]").click();

    //Starts With Function
    await page.locator("//button[starts-with(text(),'Save')]").click();

})

test("Get By Role Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await expect(page.getByRole('button',{name: 'Submit Form'})).toBeVisible();
    await page.getByRole('button',{name: 'Submit Form'}).click();

})

test("Get By Text Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    //contains text
    await expect(page.getByText('bmit For')).toBeVisible();
    await page.getByText('bmit For').click();

    //Exact Match
    await expect(page.getByText('Submit Form')).toBeVisible();
    await page.getByText('Submit Form',{exact:true}).click();

})

test("Get By Label Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await expect(page.getByLabel('Email Address:')).toBeVisible();
    await page.getByLabel('Email Address:').fill('ZOPE');

})

test("Get By Placeholder Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await expect(page.getByPlaceholder('Enter your full name')).toBeVisible();
    await page.getByPlaceholder('Enter your full name').fill('ZOPE');

})

test("Get By Alt Text Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await expect(page.getByAltText('logo image')).toBeVisible();

})

test("Get By Title Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await expect(page.getByTitle('Home page')).toBeVisible();
    await expect(page.getByTitle('Home page link',{exact:true})).toBeVisible();

})

test("Get By Test Id Selector",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await expect(page.getByTestId('product-card-2')).toBeVisible();
})