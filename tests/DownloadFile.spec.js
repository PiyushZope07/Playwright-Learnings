import { test, expect } from '@playwright/test';

test('Download File', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/download');

  // Wait for the download event while clicking the download link
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click("(//*[contains(@data-testid,'file_to_be_uploaded.txt')])[1]")
  ]);

  // Get suggested file name
  const fileNewName = download.suggestedFilename();

  // Simple string path (make sure 'download' folder exists)
  const filePath = 'download/' + fileNewName;

  // Save the file
  await download.saveAs(filePath);

  console.log(`File downloaded to: ${filePath}`);
});
