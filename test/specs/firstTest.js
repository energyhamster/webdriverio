const expectChai = require ('chai').expect

describe('Ecommerce Apllication', () => {
    it('Login page title', async () => {
        const search = $("//input[@type='submit']");
        const input = $("input[name='q']");
        
        

        await browser.url('https://google.com.ua');
        await expect(browser).toHaveTitle('Google');
        await input.setValue("car");
        await search.click();
        await browser.pause(10000);
        await expect(browser).toHaveTitleContaining('car');
        await expect(browser).toHaveUrlContaining("car");
        const resultText = await $("#result-stats").getText();
        await expectChai(resultText).to.contain("Результатов");
    });
});