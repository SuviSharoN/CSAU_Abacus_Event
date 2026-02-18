// ABACUS'26 TEAM UNLOCK SYSTEM - Frontend Logic (Index Page)
const API_URL = 'http://localhost:3000';
const POLL_INTERVAL = 10000;
let currentTeamId = null;
let pollInterval = null;

document.addEventListener('DOMContentLoaded', function() {
  promptForTeamId();
});

function promptForTeamId() {
  // Check if logged in via sessionStorage (index-specific keys)
  var teamId = sessionStorage.getItem('indexTeamId');
  var isLoggedIn = sessionStorage.getItem('indexLoggedIn');

  if (!teamId || isLoggedIn !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  currentTeamId = teamId.toLowerCase();
  updateTeamDisplay();
  startPolling();
}

function updateTeamDisplay() {
  var teamElements = document.querySelectorAll('.team-id-display');
  teamElements.forEach(function(el) {
    el.textContent = currentTeamId.toUpperCase();
  });
}

function startPolling() {
  // Initialize navbar - disable all feature links by default
  var navLinks = document.querySelectorAll('nav a[data-feature]');
  navLinks.forEach(function(link) {
    link.classList.add('disabled');
  });

  checkTeamProgress();
  pollInterval = setInterval(function() {
    checkTeamProgress();
  }, POLL_INTERVAL);
}

function checkTeamProgress() {
  var url = API_URL + '/team-progress?team=' + currentTeamId;

  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Team not found: ' + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      updateUnlockStatus(data.unlocks);
    })
    .catch(function(error) {
      console.error('Error:', error);
      var statusEl = document.getElementById('connection-status');
      if (statusEl) {
        statusEl.textContent = '⚠️ Connection error - retrying...';
      }
    });
}

function updateUnlockStatus(unlocks) {
  var statusEl = document.getElementById('connection-status');
  if (statusEl) {
    statusEl.textContent = '✅ Connected';
    statusEl.className = 'text-success';
  }

  if (unlocks.quizUnlocked) enableFeature('quiz');
  else disableFeature('quiz');

  if (unlocks.eventsUnlocked) enableFeature('events');
  else disableFeature('events');

  if (unlocks.workshopsUnlocked) enableFeature('workshops');
  else disableFeature('workshops');

  if (unlocks.accommodationUnlocked) enableFeature('accommodation');
  else disableFeature('accommodation');

  if (unlocks.profileUnlocked) enableFeature('profile');
  else disableFeature('profile');

  if (unlocks.logoutUnlocked) enableFeature('logout');
  else disableFeature('logout');

  updateStatusDisplay(unlocks);
}

function enableFeature(featureName) {
  var buttons = document.querySelectorAll('[data-feature="' + featureName + '"]');
  buttons.forEach(function(btn) {
    btn.disabled = false;
    btn.classList.remove('disabled');
  });

  var sections = document.querySelectorAll('[data-section="' + featureName + '"]');
  sections.forEach(function(sec) {
    sec.classList.remove('hidden');
  });

  var badge = document.querySelector('[data-status="' + featureName + '"]');
  if (badge) {
    badge.innerHTML = '🔓 Unlocked';
    badge.className = 'status-badge unlocked';
  }

  // Enable navbar links
  var navLinks = document.querySelectorAll('nav a[data-feature="' + featureName + '"]');
  navLinks.forEach(function(link) {
    link.classList.remove('disabled');
  });
}

function disableFeature(featureName) {
  var buttons = document.querySelectorAll('[data-feature="' + featureName + '"]');
  buttons.forEach(function(btn) {
    btn.disabled = true;
    btn.classList.add('disabled');
  });

  var sections = document.querySelectorAll('[data-section="' + featureName + '"]');
  sections.forEach(function(sec) {
    sec.classList.add('hidden');
  });

  var badge = document.querySelector('[data-status="' + featureName + '"]');
  if (badge) {
    badge.innerHTML = '🔒 Locked';
    badge.className = 'status-badge locked';
  }

  // Disable navbar links
  var navLinks = document.querySelectorAll('nav a[data-feature="' + featureName + '"]');
  navLinks.forEach(function(link) {
    link.classList.add('disabled');
  });
}

function updateStatusDisplay(unlocks) {
  var trackableFeatures = ['eventsUnlocked', 'workshopsUnlocked', 'accommodationUnlocked', 'profileUnlocked', 'logoutUnlocked'];
  var unlockedCount = 0;

  trackableFeatures.forEach(function(featureKey) {
    if (unlocks[featureKey] === true) {
      unlockedCount++;
    }
  });

  var progressEl = document.getElementById('unlock-progress');
  if (progressEl) {
    progressEl.textContent = unlockedCount + ' / 5 features unlocked';
  }

  var overallStatus = document.getElementById('overall-status');
  if (overallStatus) {
    var percentage = Math.round((unlockedCount / 5) * 100);
    overallStatus.textContent = percentage + '%';
  }
}

function setActiveNavLink() {
  var currentPage = window.location.pathname.split('/').pop();
  if (currentPage === '' || currentPage === '/') {
    currentPage = 'index.html';
  }

  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setActiveNavLink();
});

window.addEventListener('beforeunload', function() {
  if (pollInterval) {
    clearInterval(pollInterval);
  }
});

function logout() {
  var shouldLogout = window.confirm('Are you sure you want to logout?');
  if (!shouldLogout) {
    return;
  }

  sessionStorage.removeItem('indexTeamId');
  sessionStorage.removeItem('indexLoggedIn');
  window.location.href = 'login.html';
}
