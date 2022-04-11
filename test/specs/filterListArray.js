const expectChai = require ('chai').expect

describe('Filter Array', async () => {
    it('Filter', async () => {
        await browser.url('https://www.rahulshettyacademy.com/seleniumPractise/#/offers');
        await browser.maximizeWindow();

        const tableRow = await $("tr th:nth-child(1)");
        await tableRow.click();
        await browser.pause(3000);

        const vaggieLocators = await $$("tr td:nth-child(1)");
        
        const originalVaggieNames = await Promise.all(await vaggieLocators.map(async (vaggieLocators) => 
            await vaggieLocators.getText()));

        console.log(originalVaggieNames);

        veggies = originalVaggieNames.slice(); 
        const sortedVeggie = veggies.sort();
        console.log(sortedVeggie);
        expectChai(originalVaggieNames).to.be.equal(sortedVeggie);
    });
});