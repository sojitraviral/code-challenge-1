// @ts-check
const { test, expect } = require('@playwright/test');

test('code challenge for GitHub UI', async ({ page }) => {

  await page.goto('https://github.com/login');
  await page.locator('#login_field').fill('viralsojitra2901@gmail.com');
  await page.locator('#password').fill('Viral@2901');
  await page.locator('input[name="commit"]').click();

  await page.goto('https://github.com/sojitraviral/code-challenge-1');
  await page.locator('a[title="file-to-update.txt"]').last().click();

  await page.locator('a[data-testid="edit-button"]').click();
  await page.locator('.cm-lineWrapping').first().press('ArrowDown');
  await page.locator('.cm-lineWrapping > .cm-line').last().fill("viral");

  await page.locator('button[type="button"]').getByText("Commit changes...").click();
  await expect(page.locator("#commit-message-input").getByText('Update file-to-update.txt')).toBeVisible();
  // console.log("text", text);

  await page.locator('.Box-sc-g0xbh4-0 .jZSkdQ').getByText("new branch").check();
  await page.locator('button[type="button"]').getByText("Propose changes").click();

  await expect(page.locator('.Subhead-heading').last().getByText("Open a pull request")).toBeVisible();
  await page.locator('#pull-requests-tab').click();
  await expect(page.locator('[data-hovercard-type="pull_request"]').getByText('Update file-to-update.txt')).toBeVisible();
});
