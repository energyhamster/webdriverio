const loginPage = require('../pageObjects/loginPage')
const shopPage = require('../pageObjects/shopPage')
const reviewPage = require('../pageObjects/reviewPage')
const confirmPage = require('../pageObjects/confirmPage')
const fs = require('fs')

const expectChai = require ('chai').expect

let products = JSON.parse(fs.readFileSync('test/testData/poE2E.json'))

describe("eCommerce E2E suite", async () => {
    products.forEach(({products}) => {
        it("End to end Test purchase", async () => {

            const products = ['iphone X', 'Blackberry'];
            
            await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
            await loginPage.login("rahulshettyacademy", "learning");
            await shopPage.checkout.waitForExist();
            await shopPage.addProductToCart(products);
            await shopPage.checkout.click();
            sumOfProducts = await reviewPage.sumOfProducts();
            totalValue = await reviewPage.totalFormattedPrice();
            await expectChai(sumOfProducts).to.be.equal(totalValue);
            await reviewPage.checkoutBtn.click();
            await confirmPage.deliveryLocation("India");
            await confirmPage.loader.waitForExist({reverse: true}); //wait till element disappiered
            await confirmPage.countryDropdown.click();
            await confirmPage.purchaseBtn.click();
            await expect(confirmPage.alertSuccess).toHaveTextContaining("Success");
        });
    })
});