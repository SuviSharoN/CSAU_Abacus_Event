const workshops = [
    { name: 'Advanced Data Analytics', time: '09:00 AM', speaker: 'Dr. Nisha Rao', date: 'March 5, 2026' },
    { name: 'Business Intelligence and BI Tools', time: '10:30 AM', speaker: 'Arjun Menon', date: 'March 5, 2026' },
    { name: 'AI and Deep Learning Fundamentals', time: '12:00 PM', speaker: 'Prof. Meera Iyer', date: 'March 6, 2026' },
    { name: 'Financial Analytics and Modeling', time: '02:00 PM', speaker: 'Karthik Srinivasan', date: 'March 6, 2026' },
    { name: 'Web Analytics and Customer Insights', time: '03:30 PM', speaker: 'Ananya Shah', date: 'March 6, 2026' }
];

let currentWorkshopIndex = 0;

const nameEl = document.getElementById('workshopName');
const timeEl = document.getElementById('workshopTime');
const speakerEl = document.getElementById('workshopSpeaker');
const dateEl = document.getElementById('workshopDate');
const indexEl = document.getElementById('workshopIndex');
const prevBtn = document.getElementById('prevWorkshopBtn');
const nextBtn = document.getElementById('nextWorkshopBtn');

// Pre-built: Render function
function renderWorkshop() {
    const workshop = workshops[currentWorkshopIndex];
    nameEl.textContent = workshop.name;
    timeEl.textContent = workshop.time;
    speakerEl.textContent = workshop.speaker;
    dateEl.textContent = workshop.date;
    indexEl.textContent = (currentWorkshopIndex + 1) + ' / ' + workshops.length;
}

// TODO: JS TASK
// Add cyclic "previous" behavior.
// Hint: decrement currentWorkshopIndex, wrap using modulo, then call renderWorkshop().
prevBtn.addEventListener('click', function() {
});

// TODO: JS TASK
// Add cyclic "next" behavior.
// Hint: increment currentWorkshopIndex and wrap using modulo, then call renderWorkshop().
nextBtn.addEventListener('click', function() {
});

// Pre-built initial call
renderWorkshop();
