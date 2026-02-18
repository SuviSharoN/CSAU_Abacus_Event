function initializeAccommodationPage() {
    const hostelChoice = document.getElementById('hostelChoice');
    const registerBtn = document.getElementById('registerBtn');
    const payBtn = document.getElementById('payBtn');
    const paidNote = document.getElementById('paidNote');

    if (!hostelChoice || !registerBtn || !payBtn || !paidNote) return;

    hostelChoice.addEventListener('change', () => {
        handleHostelSelection(hostelChoice, registerBtn, payBtn, paidNote);
    });

    registerBtn.addEventListener('click', () => {
        handleRegisterClick(payBtn, paidNote);
    });

    payBtn.addEventListener('click', () => {
        handlePayClick(payBtn, paidNote);
    });
}

// TODO: CODE THIS
// Show register button only when hostel is selected.
// Hide pay button and paid message on every new selection.
function handleHostelSelection(hostelChoice, registerBtn, payBtn, paidNote) {

}

// TODO: CODE THIS
// On register click:
// - show pay button
// - hide paid message
function handleRegisterClick(payBtn, paidNote) {

}

// TODO: CODE THIS
// On pay click:
// - show "Paid" message
// - change pay button text to "Paid"
// - disable pay button
function handlePayClick(payBtn, paidNote) {
    
}

document.addEventListener('DOMContentLoaded', () => {
    initializeAccommodationPage();
});

