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

// TODO: CODE THIS - Render event cards using provided events data
function renderEvents() {
    // TODO:
    // Render all events dynamically inside #eventsContainer.
    // Each event should display:
    // - Icon
    // - Title
    // - Description
    // - Time and Prize
    // - A functional Register button
    //
    // The Register button must pass the correct event ID to handleRegister().
}

function handleRegister(eventId) {
    const selectedEvent = events.find(event => event.id === eventId);
    if (!selectedEvent) return;
    alert('Registered for ' + selectedEvent.title + '!');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
});


