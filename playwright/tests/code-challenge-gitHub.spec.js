// @ts-check
import { test } from '@playwright/test';
import { LoginPage, BasePage, PrPage } from '../pageObject/index.js';

test('code challenge for GitHub UI', async ({ page }) => {

  const lp = new LoginPage(page);
  const basePage = new BasePage(page);
  const pr = new PrPage(page);

  await lp.login('viralsojitra2901@gmail.com', 'Viral@2901');

  // open repo
  await basePage.openRepo();

  //open txt file
  await basePage.openTxtFile();

  // edit Txt file
  await basePage.editTxtFile("viral");
  // code commit in new branch
  await basePage.commitCode();
  await basePage.selectNewBranch();

  await pr.openPr();
  // get pr count
  await pr.pullReqCount();

  // create pr
  await pr.createPr();

  await basePage.selectTab()

  //verify pr count
  await pr.expectPullReqCount();
});
