// Teams data
const teams = [
    { id: 1, name: 'Team Alpha', points: 1200, events: 8 },
    { id: 2, name: 'Team Beta', points: 1050, events: 7 },
    { id: 3, name: 'Team Gamma', points: 980, events: 6 },
    { id: 4, name: 'Team Delta', points: 920, events: 5 },
    { id: 5, name: 'Team Epsilon', points: 850, events: 5 },
    { id: 6, name: 'Team Zeta', points: 800, events: 4 },
    { id: 7, name: 'Team Eta', points: 750, events: 4 },
    { id: 8, name: 'Team Theta', points: 700, events: 3 },
    { id: 9, name: 'Team Iota', points: 650, events: 3 },
    { id: 10, name: 'Team Kappa', points: 600, events: 2 }
];

let currentSortBy = 'points';

// TODO: CODE FUNCTION 1 - Render leaderboard table
function renderLeaderboard() {
    // BLANK: Get tableBody element
    // BLANK: Clear existing rows
    // BLANK: Loop through teams array
    // BLANK: For each team, create a table row with: rank, name, points, events
    // BLANK: Insert all rows into tableBody
}

// TODO: CODE FUNCTION 2 - Sort and re-render
function sortTeams(sortBy) {
    // BLANK: If sortBy is 'points', sort teams by points (descending)
    // BLANK: If sortBy is 'events', sort teams by events (descending)
    // BLANK: Store current sort in currentSortBy variable
    // BLANK: Call renderLeaderboard()
}

// Setup
document.addEventListener('DOMContentLoaded', () => {
    renderLeaderboard();
    
    document.getElementById('sortPointsBtn').addEventListener('click', () => {
        sortTeams('points');
    });
    
    document.getElementById('sortEventsBtn').addEventListener('click', () => {
        sortTeams('events');
    });
});
