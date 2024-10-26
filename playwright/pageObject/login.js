export default class LoginPage {

    constructor(page) {
        this.page = page;
    }
    async login(userName, password) {

        if (!userName && !password) {
            console.log("Please enter your UserName and Password")
        }
        await this.page.goto('https://github.com/login');
        await this.page.locator('#login_field').fill(userName);
        await this.page.locator('#password').fill(password);
        await this.page.locator('input[name="commit"]').click();
    }
}