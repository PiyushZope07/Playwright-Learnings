import {test,expect} from '@playwright/test';

test('Single CheckBox',async({page})=>{
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

test('Multiple CheckBox',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    let checkbox1="input[name='checkBoxOption1']";
    let checkbox2="//input[contains(@name,'checkBoxOption2')]";

    //Assert 1st checkbox 
    expect(await page.locator(checkbox1).isChecked()).toBeFalsy;
    await page.locator(checkbox1).check();
    expect(await page.locator(checkbox1).isChecked()).toBeTruthy;

    //Assert 2nd checkbox 
    expect(await page.locator(checkbox2).isChecked()).toBeFalsy;
    await page.locator(checkbox2).check();
    expect(await page.locator(checkbox2).isChecked()).toBeTruthy;

});