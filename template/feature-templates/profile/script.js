const teamId = 'TEAM1';

function initializeProfileForm() {
    const summaryEl = document.getElementById('teamSummaryDisplay');
    const teamIdInput = document.getElementById('teamIdDisplay');

    if (summaryEl) summaryEl.textContent = teamId;
    if (teamIdInput) teamIdInput.value = teamId;
}

function getProfileDataFromForm() {
    return {
        teamId: teamId,
        teamName: document.getElementById('teamName').value.trim(),
        leadName: document.getElementById('leadName').value.trim(),
        leadEmail: document.getElementById('leadEmail').value.trim(),
        teamSize: document.getElementById('teamSize').value.trim(),
        bio: document.getElementById('bio').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        organization: document.getElementById('organization').value.trim()
    };
}

// TODO: CODE THIS - Basic form validation checks
function validateProfileForm(profileData) {
    // BLANK: Check required fields: teamName, leadName, leadEmail, teamSize
    // BLANK: Validate email format (simple check is enough, e.g. must include '@' and '.')
    // BLANK: Validate teamSize is between 1 and 10
    // BLANK: Optional: if phone is entered, ensure it has only digits/+/-/spaces
    // BLANK: Return { isValid: true } if all checks pass
    // BLANK: Return { isValid: false, message: 'your error message' } on first failure
}

function handleProfileSubmit(event) {
    event.preventDefault();

    const profileData = getProfileDataFromForm();
    const validation = validateProfileForm(profileData);

    if (!validation || validation.isValid !== true) {
        alert((validation && validation.message) || 'Please fix form errors.');
        return;
    }

    console.log('Profile saved:', profileData);

    const successMessage = document.getElementById('successMessage');
    if (!successMessage) return;

    successMessage.classList.remove('hidden');
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 5000);
}

function setupProfilePage() {
    initializeProfileForm();

    const form = document.getElementById('profileForm');
    if (!form) return;

    form.addEventListener('submit', handleProfileSubmit);
}

document.addEventListener('DOMContentLoaded', () => {
    setupProfilePage();
});


