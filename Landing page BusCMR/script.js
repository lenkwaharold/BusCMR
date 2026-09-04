// ==========================================
// BUSCMR LANDING PAGE - SCRIPT.JS
// ==========================================


// Wait until the HTML page has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get the From and To dropdowns
    const from = document.getElementById("from");
    const to = document.getElementById("to");

    // Get the date and passengers fields
    const date = document.getElementById("date");
    const passengers = document.getElementById("passengers");

    // Get the swap button/icon
    const swapButton = document.querySelector(".swap-icon");

    // Get the Search Buses button
    const searchButton = document.querySelector(".search-btn");


    // ==========================================
    // SWAP FROM AND TO LOCATIONS
    // ==========================================

    if (swapButton) {

        swapButton.addEventListener("click", function () {

            // Store the From value temporarily
            const temporaryValue = from.value;

            // Put the To value inside From
            from.value = to.value;

            // Put the old From value inside To
            to.value = temporaryValue;
        });
    }


    // ==========================================
    // SEARCH BUSES BUTTON
    // ==========================================

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            // Check if From is empty
            if (from.value === "") {
                alert("Please select your departure location.");
                return;
            }

            // Check if To is empty
            if (to.value === "") {
                alert("Please select your destination.");
                return;
            }

            // Check if both locations are the same
            if (from.value === to.value) {
                alert("Departure and destination cannot be the same.");
                return;
            }

            // Check if date is empty
            if (date.value === "") {
                alert("Please select your travel date.");
                return;
            }


            // If everything is correct, show trip information
            alert(
                "Searching for buses...\n\n" +
                "From: " + from.value + "\n" +
                "To: " + to.value + "\n" +
                "Date: " + date.value + "\n" +
                "Passengers: " + passengers.value
            );

            // Later, this can redirect the user to home.html
            // window.location.href = "home.html";
        });
    }

});