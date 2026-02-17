let interestedWorkshops = [];

// TODO: CODE FUNCTION 1 - Toggle workshop interest
function toggleWorkshopInterest(workshopName) {
    // BLANK: Check if workshopName is already in interestedWorkshops array
    // BLANK: If yes, remove it; if no, add it
    // BLANK: Call updateCount()
}

// TODO: CODE FUNCTION 2 - Update and display count
function updateCount() {
    // BLANK: Get countDisplay element
    // BLANK: Set its text to show: "You're interested in X workshops"
}

// Setup
document.addEventListener('DOMContentLoaded', () => {
    const joinBtns = document.querySelectorAll('.join-btn');
    joinBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const workshopName = btn.getAttribute('data-workshop');
            toggleWorkshopInterest(workshopName);
        });
    });
});
