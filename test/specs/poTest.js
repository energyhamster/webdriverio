const loginPage = require('../pageObjects/loginPage')

const fs = require('fs')

const expectChai = require ('chai').expect

let credentials = JSON.parse(fs.readFileSync('test/testData/poTest.json'))

describe('Login to Apllication', () => {
    credentials.forEach(({username, password}) => {
        it('Incorrect login error massege presents', async () => {
            await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
            await browser.maximizeWindow();
            await expect(browser).toHaveTitleContaining('LoginPage Practise');
            await loginPage.login(username, password);
            await browser.waitUntil(async () => (await loginPage.signIn.getAttribute("value")) === "Sign In", {
                timeout: 5000,
                timeoutMsg: "Error message is not showing up"
            });
        });
    });
});