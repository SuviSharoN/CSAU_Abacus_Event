let selectedHotel = null;

// TODO: CODE FUNCTION 1 - Select a hotel
function selectHotel(hotelName) {
    // BLANK: Store the selected hotel name in selectedHotel variable
    // BLANK: Call updateDisplay()
}

// TODO: CODE FUNCTION 2 - Update and show selected hotel
function updateDisplay() {
    // BLANK: Get selectedDisplay element
    // BLANK: If selectedHotel is set, show: "Selected: [Hotel Name]"
    // BLANK: Otherwise show: "No hotel selected"
}

// Setup
document.addEventListener('DOMContentLoaded', () => {
    const selectBtns = document.querySelectorAll('.select-btn');
    selectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const hotelName = btn.getAttribute('data-hotel');
            selectHotel(hotelName);
        });
    });
});
