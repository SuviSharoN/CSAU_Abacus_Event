const teamId = 'TEAM1';

// TODO: CODE FUNCTION 1 - Initialize form with team info and saved data
function initializeProfileForm() {
    // BLANK: Set teamIdDisplay input value using teamId
    // BLANK: Load saved profile from sessionStorage (if available)
    // BLANK: Populate all fields from saved profile
}

// TODO: CODE FUNCTION 2 - Handle profile form submission
function handleProfileSubmit(event) {
    // BLANK: Prevent default form submission
    // BLANK: Collect all input values into a profileData object
    //   Keys: teamId, teamName, leadName, leadEmail, teamSize, bio, phone, organization
    // BLANK: Save profileData in sessionStorage
    // sessionStorage.setItem('teamProfile', JSON.stringify(profileData));
    // BLANK: Show #successMessage for 5 seconds, then hide it
}

// Setup
document.addEventListener('DOMContentLoaded', () => {
    initializeProfileForm();
    document.getElementById('profileForm').addEventListener('submit', handleProfileSubmit);
});
