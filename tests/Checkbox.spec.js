import {test,expect} from '@playwright/test';

test.skip('Single CheckBox',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    let checkbox="input[name='checkBoxOption1']";

    //Assert checkbox is unchecked
    expect(await page.locator(checkbox).isChecked()).toBeFalsy;

    //Check Checkbox
    await page.locator(checkbox).check();

    //Assert checkbox is checked
    expect(await page.locator(checkbox).isChecked()).toBeTruthy;

    //unCheck Checkbox
    await page.locator(checkbox).uncheck();

    //Assert checkbox is unchecked
    expect(await page.locator(checkbox).isChecked()).toBeFalsy;
});
