// ABACUS'26 QUIZ - Standalone Logic
const API_URL = 'http://localhost:3000';
let currentTeamId = null;

document.addEventListener('DOMContentLoaded', function() {
  checkQuizLogin();
});

function checkQuizLogin() {
  // Check if logged in to quiz
  var teamId = sessionStorage.getItem('quizTeamId');
  var isLoggedIn = sessionStorage.getItem('quizLoggedIn');

  if (!teamId || isLoggedIn !== 'true') {
    window.location.href = 'quiz-login.html';
    return;
  }

  currentTeamId = teamId.toLowerCase();
  updateTeamDisplay();
}

function updateTeamDisplay() {
  var teamElements = document.querySelectorAll('.team-id-display');
  teamElements.forEach(function(el) {
    el.textContent = currentTeamId.toUpperCase();
  });
}

function logout() {
  var shouldLogout = window.confirm('Are you sure you want to logout?');
  if (!shouldLogout) {
    return;
  }

  sessionStorage.removeItem('quizTeamId');
  sessionStorage.removeItem('quizLoggedIn');
  window.location.href = 'quiz-login.html';
}
