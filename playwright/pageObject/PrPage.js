import { expect } from '@playwright/test';


export default class PrPage {

    pullCount;
    newCount;
    constructor(page) {
        this.page = page;
    }

    async openPr() {
        await expect(this.page.locator('.Subhead-heading').last().getByText("Open a pull request")).toBeVisible();
    }

    pullReqTabCount() {
        return this.page.locator('#pull-requests-repo-tab-count')
    }
    async pullReqCount() {
        this.pullCount = await this.pullReqTabCount().textContent();
        return this.pullCount;
    }

    async createPr() {
        await this.page.locator('button[type="submit"]').getByText("Create pull request").click();
        this.newCount = parseInt(`${this.pullCount}`) + 1;
        await expect(this.pullReqTabCount()).toHaveText(`${this.newCount}`);
    }

    async expectPullReqCount() {
        this.newCount = parseInt(`${this.pullCount}`) + 1;
        await expect(this.page.locator('[class="btn-link selected"]').last()).toContainText(`${this.newCount}`);

    }
}