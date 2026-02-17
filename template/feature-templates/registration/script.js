// Ticket pricing data
const ticketPrices = {
    early: 30,
    regular: 50,
    late: 70
};

const accommodationPrice = 60;

// TODO: CODE THIS - Function 1: calculatePrice()
// Explanation: Get the selected ticket type and accommodation checkbox
// Calculate total: base price + accommodation cost if checked
// Update the #totalPrice span with the result
// This should run whenever ticket type or accommodation changes
function calculatePrice() {
    // BLANK: Get selected ticket type from #ticketType select
    const ticketType = document.getElementById('ticketType').value;
    
    // BLANK: Get if accommodation is checked
    const hasAccommodation = document.getElementById('accommodation').checked;
    
    // BLANK: Get base price from ticketPrices object
    let total = ticketPrices[ticketType];
    
    // BLANK: Add accommodation cost if checked
    if (hasAccommodation) {
        total += accommodationPrice;
    }
    
    // BLANK: Update the #totalPrice span with total
    document.getElementById('totalPrice').textContent = total;
}

// TODO: CODE THIS - Function 2: submitRegistration()
// Explanation: Collect form data, validate, generate ID, show confirmation
// Get name, email, ticket type, accommodation status from form
// Show confirmation section with details
// Hide registration form
function submitRegistration() {
    // BLANK: Get name from #name input
    const name = document.getElementById('name').value;
    
    // BLANK: Get email from #email input
    const email = document.getElementById('email').value;
    
    // BLANK: Get ticket type from #ticketType select
    const ticketType = document.getElementById('ticketType').value;
    
    // BLANK: Get accommodation checkbox status
    const hasAccommodation = document.getElementById('accommodation').checked;
    
    // BLANK: Validate name is not empty
    if (!name.trim()) {
        alert('Please enter your team name');
        return;
    }
    
    // BLANK: Validate email is not empty
    if (!email.trim()) {
        alert('Please enter your email');
        return;
    }
    
    // BLANK: Generate registration ID (e.g., REG001234)
    const registrationId = 'REG' + Math.floor(Math.random() * 100000);
    
    // BLANK: Calculate total price
    let total = ticketPrices[ticketType];
    if (hasAccommodation) {
        total += accommodationPrice;
    }
    
    // BLANK: Update confirmation section with collected data
    document.getElementById('registrationId').textContent = registrationId;
    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmEmail').textContent = email;
    document.getElementById('confirmTicket').textContent = ticketType.charAt(0).toUpperCase() + ticketType.slice(1);
    document.getElementById('confirmTotal').textContent = total;
    
    // BLANK: Hide form, show confirmation
    document.querySelector('.registration-form').style.display = 'none';
    document.getElementById('confirmationSection').style.display = 'block';
}

// Set up event listeners
document.getElementById('ticketType').addEventListener('change', calculatePrice);
document.getElementById('accommodation').addEventListener('change', calculatePrice);

// Initialize price display
calculatePrice();
}

// TODO: BLANK - Create function to generate registration ID
function generateRegistrationId() {
    // BLANK: Create unique registration ID (e.g., REG-2026-XXXXX)
    // BLANK: Include timestamp or random numbers
    // BLANK: Return ID string
}

// TODO: BLANK - Create function to display confirmation
function displayConfirmation(regData) {
    // BLANK: Show "Registration Complete!" message
    // BLANK: Display generated registration ID
    // BLANK: Show summary of selected options
    // BLANK: Show total price
    // BLANK: Show download receipt button
}

// TODO: BLANK - Create function to download receipt
function downloadReceipt() {
    // BLANK: Create receipt text/PDF
    // BLANK: Include registration ID, personal info, selections, total price
    // BLANK: Trigger download
}

// TODO: BLANK - Setup form inputs to calculate price on change
function setupPriceCalculation() {
    // BLANK: Get all radio buttons for ticket type
    // BLANK: Get accommodation checkbox
    // BLANK: Add change listeners
    // BLANK: Call calculatePrice() on each change
}

// TODO: BLANK - Submit button setup
function setupSubmitButton() {
    // BLANK: Get submit button
    // BLANK: Add click listener
    // BLANK: Call submitRegistration()
}

document.addEventListener('DOMContentLoaded', () => {
    setupPriceCalculation();
    setupSubmitButton();
    calculatePrice(); // Initial price display
});
