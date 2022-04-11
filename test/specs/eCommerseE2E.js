const expectChai = require ('chai').expect

describe("eCommerce E2E suite", async () => {
    it("End to end Test", async () => {
        const products = ['iphone X', 'Blackberry'];
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await $("input[name='username']").setValue("rahulshettyacademy");
        const password = $("//input[@type='password']");
        await password.setValue("learning");
        await $("#signInBtn").click();
        const checkout = await $("*=Checkout");
        await checkout.waitForExist();
        const cards = $$("div[class='card h-100']");

        for (i = 0; i < await cards.length; i++) {
            const cardTitle = await cards[i].$("div h4 a");

            if (products.includes(await cardTitle.getText())) {
                const addButton = await cards[i].$(".card-footer button");
                addButton.click();
            }
        }
        await checkout.click();

        const productPrices = await $$("//tr/td[4]/strong");
        const sumOfProducts = (await Promise.all(await productPrices.map(async (productPrices)=> 
            parseInt((await productPrices.getText()).split(".")[1].trim()))))
            .reduce((accumulator, price) => accumulator + price, 0);
        const totalValue = parseInt((await $("h3 strong").getText()).split(".")[1].trim());
        await expectChai(sumOfProducts).to.be.equal(totalValue);
        
        await $(".btn-success").click();
        await $("#country").setValue("Ind");
        await $(".lds-ellipsis").waitForExist({reverse: true}); //wait till element disappiered
        await $("=India").click();
        await $("input[type='submit']").click();
        await expect($(".alert-success")).toHaveTextContaining("Success");
    });
});