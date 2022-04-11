const expectChai = require ('chai').expect

describe('Ecommerce Apllication', () => {
    xit('Dynamic Dropdown Controls', async () => {
        
        const dropdown = $("")
        
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await browser.maximizeWindow();
        const autocomplete = $("#autocomplete");
        await autocomplete.setValue("Ind");
        await browser.pause(1000);

        
        let items = $$("[class='ui-menu-item'] div");
        for(let i = 0; i < await items.length; i++) {
            if( await items[i].getText() === "dndsia") {
                await items[i].click();
                await browser.pause(5000);
            }
        }

    });

    xit('Select Checkboxes', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await browser.maximizeWindow();
        const element = await $$("input[type='checkbox']")

        await element[1].click();
        let sss = await element[1].isSelected();
        expectChai(sss).to.be.true;
        

    });

    xit('Scroll down', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await browser.maximizeWindow();
        
        const btn = $("#mousehover");
        await btn.scrollIntoView();
        await browser.pause(3000);
        await btn.moveTo();
        await browser.pause(3000);
        await $("=Top").click();
        await browser.pause(3000);
    });

    xit('Doubleclick', async () => {
        await browser.url('https://only-testing-blog.blogspot.com/2014/09/selectable.html');
        await browser.maximizeWindow();

        await $("button").doubleClick();
        await browser.pause(5000);
        expectChai(await browser.isAlertOpen()).to.be.true;
        expectChai(await browser.getAlertText()).to.be.equal("You double clicked me.. Thank You..");
        await browser.pause(5000);
        await browser.acceptAlert();
        await browser.pause(5000);
    });


});