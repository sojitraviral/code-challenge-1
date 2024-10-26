export default class BasePage {

    constructor(page) {
        this.page = page;
    }

    async openRepo() {
        await this.page.goto('https://github.com/sojitraviral/code-challenge-1');

    }

    async selectTab() {
        await this.page.locator('#pull-requests-tab').click();
    }

    async openTxtFile() {
        await this.page.locator('a[title="file-to-update.txt"]').last().click();
    }

    async editTxtFile(editTxt) {
        await this.page.locator('a[data-testid="edit-button"]').click();
        await this.page.locator('.cm-lineWrapping').first().press('ArrowDown');
        await this.page.locator('.cm-lineWrapping > .cm-line').last().fill(editTxt);
    }

    async commitCode() {
        await this.page.getByText("Commit changes...").click();
    }

    async selectNewBranch() {
        await this.page.getByText("new branch").check();
        await this.page.locator('button[type="button"]').getByText("Propose changes").click();
    }


}