const expectChai = require ('chai').expect

describe('Ecommerce Apllication', () => {
    it('Login page title', async () => {
        const username = $("#username");
        const password = $("#password");
        const signIn = $("#signInBtn");
        
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await browser.maximizeWindow();
        await expect(browser).toHaveTitleContaining('LoginPage Practise');
        await username.setValue("rahulshettyacademyfff");
        await password.setValue("learningfff");
        await signIn.click();
        await browser.waitUntil(async () => (await signIn.getAttribute("value")) === "Sign In", {
            timeout: 5000,
            timeoutMsg: "Error message is not showing up"
        });
    });
});