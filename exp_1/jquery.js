// jQuery experiment: Photo Editing Cost Calculator
$(document).ready(function () {
    const prices = {
        filter: 2.00,
        crop: 1.50,
        saturation: 1.20,
        retouch: 5.00,
        background: 7.50
    };

    $("#calculateCost").click(function () {
        const service = $("#editingService").val();
        const quality = $("#quality").val();
        const countText = $("#photoCount").val();
        const count = Number(countText);
        const result = $("#costResult");

        if (countText === "" || !Number.isInteger(count) || count < 1 || count > 1000) {
            result.text("Please enter a whole number of photos between 1 and 1000.");
            result.css({ "background-color": "#fff0f0", "color": "#a32020" });
            return;
        }

        const unitPrice = prices[service] + (quality === "premium" ? 1.00 : 0);
        const total = unitPrice * count;
        result.html("Estimated total: <strong>$" + total.toFixed(2) + "</strong><br>" + count + " photo(s) × $" + unitPrice.toFixed(2) + " per photo");
        result.css({ "background-color": "#e5f7f2", "color": "#176653" });
    });
});
