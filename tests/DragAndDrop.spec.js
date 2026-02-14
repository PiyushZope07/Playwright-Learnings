import {test,expect} from '@playwright/test';

test('Drag and Drop Approach 1',async({page})=>{
    await page.goto('https://demoqa.com/droppable');


    const source=await page.locator('#draggable');
    const target=await page.locator("(//*[contains(@id,'droppable')])[7]");
    const DropVerify=await page.locator("(//*[contains(@id,'droppable')]//p)[1]");

    //#Approach1
    await source.dragTo(target);

    //Assert that the drop was successful
    const targetText=await DropVerify.textContent();
    await expect(targetText).toBe("Dropped!");

    await page.waitForTimeout(5000);

});

test('Drag and Drop Approach 2',async({page})=>{
    await page.goto('https://demoqa.com/droppable');

     const source=await page.locator('#draggable');
    const target=await page.locator("(//*[contains(@id,'droppable')])[7]");
    const DropVerify=await page.locator("(//*[contains(@id,'droppable')]//p)[1]");

    //Apprach2
    await source.hover();
    await page.mouse.down();

    await target.hover();
    await page.mouse.up();

    const targetText=await DropVerify.textContent();
    await expect(targetText).toBe("Dropped!");

    await page.waitForTimeout(5000);

});