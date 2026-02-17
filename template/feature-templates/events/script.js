// Event data
const events = [
    {
        id: 1,
        icon: '📊',
        title: 'Data Analytics Challenge',
        description: 'Analyze real-world business data and create insights',
        time: '2 hours',
        prize: '5000 points'
    },
    {
        id: 2,
        icon: '💼',
        title: 'Business Strategy Case Study',
        description: 'Solve complex business problems using strategic thinking',
        time: '3 hours',
        prize: '7500 points'
    },
    {
        id: 3,
        icon: '🤖',
        title: 'AI & Machine Learning Summit',
        description: 'Explore the latest in artificial intelligence and machine learning',
        time: '4 hours',
        prize: '10000 points'
    },
    {
        id: 4,
        icon: '🎬',
        title: 'Presentation Showcase',
        description: 'Create and deliver a compelling presentation on a business topic',
        time: '1 hour per team',
        prize: '3000 points'
    },
    {
        id: 5,
        icon: '⚡',
        title: 'Quick Fire Quiz',
        description: 'Test your knowledge across business, analytics, and general concepts',
        time: '30 minutes',
        prize: '2000 points'
    },
    {
        id: 6,
        icon: '🌐',
        title: 'Panel Discussion & Networking',
        description: 'Interact with industry leaders and network with fellow participants',
        time: '1.5 hours',
        prize: 'N/A (Networking)'
    }
];

// TODO: CODE FUNCTION 1 - Render event cards from data
function renderEvents() {
    // BLANK: Get eventsContainer element
    // BLANK: Loop through events array
    // BLANK: For each event, create a card HTML string with:
    //   - event.icon
    //   - event.title
    //   - event.description
    //   - "Time: " + event.time + " | Prize: " + event.prize
    // BLANK: Insert all cards into eventsContainer
}

// TODO: CODE FUNCTION 2 - Handle register button click
function handleRegister(eventId) {
    // BLANK: Get the event object from events array using eventId
    // BLANK: Show an alert: "Registered for [event.title]!"
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
});
