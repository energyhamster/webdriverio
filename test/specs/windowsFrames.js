const expectChai = require ('chai').expect

describe("Windows Frames Suit", async () => {
    it("Browser windos switch", async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await $(".blinkingText").click();

        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        const h1Text = await $("h1").getText();
        const text = "Documents request";
        const upperText = text.toUpperCase();
        console.log(upperText);
        await expectChai(h1Text).to.be.equal(upperText);
        await browser.pause(3000);
    });
});