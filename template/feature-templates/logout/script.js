// TODO: CODE THIS
// Add click handler for #logoutBtn.
// On click:
// 1) show basic confirm popup
// 2) if confirmed, redirect to ../index.html
function handleLogout() {
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    if (!logoutBtn) return;

    logoutBtn.addEventListener('click', handleLogout);
});
