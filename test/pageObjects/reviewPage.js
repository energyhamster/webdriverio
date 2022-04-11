class reviewPage {

    get productPrices() {
        return $$("//tr/td[4]/strong");
    }

    get totalPrice() {
        return $("h3 strong");
    }

    get checkoutBtn() {
        return $(".btn-success");
    }

    async sumOfProducts() {
        (await Promise.all(await this.productPrices.map(async (productPrices)=> 
        parseInt((await productPrices.getText()).split(".")[1].trim()))))
        .reduce((accumulator, price) => accumulator + price, 0);
    }

    async totalFormattedPrice() {
        parseInt((await this.totalPrice.getText()).split(".")[1].trim());
    }
}

module.exports = new reviewPage();