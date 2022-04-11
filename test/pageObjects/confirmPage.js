class ConfirmPage {

    get country() {
        return $("#country");
    }

    get loader() {
        return $(".lds-ellipsis");
    }

    get countryDropdown() {
        return $("div[class='suggestions'] ul li a");
    }

    get purchaseBtn() {
        return $("input[type='submit']");
    }

    get alertSuccess() {
        return $(".alert-success");
    }

    async deliveryLocation(country) {
        await this.country.setValue(country);
    }

}

module.exports = new ConfirmPage();