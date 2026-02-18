const express = require('express');
const cors = require('cors');
const path = require('path');
const archiver = require('archiver');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from template directory
app.use('/template', express.static(path.join(__dirname, '../template')));

// Serve static files from admin directory
app.use('/admin', express.static(path.join(__dirname, '../admin')));

// Root route - redirect to login
app.get('/', (req, res) => {
  res.redirect('/template/login.html');
});

// In-memory storage for teams
const teams = {};
const teamCredentials = {};

// Initialize 20 teams (team1 to team20)
for (let i = 1; i <= 20; i++) {
  const teamId = `team${i}`;
  const teamPassword = `AB26TEAM${String(i).padStart(2, '0')}`;

  teamCredentials[teamId] = teamPassword;

  teams[`team${i}`] = {
    eventsUnlocked: false,
    workshopsUnlocked: false,
    accommodationUnlocked: false,
    profileUnlocked: false,
    logoutUnlocked: false,
    quizUnlocked: true,
    quizProgress: 0
  };
}

// POST endpoint: Team login
app.post('/team-login', (req, res) => {
  const { team_id, password } = req.body;

  if (!team_id || !password) {
    return res.status(400).json({
      success: false,
      error: 'Missing team_id or password'
    });
  }

  if (!teams[team_id]) {
    return res.status(404).json({
      success: false,
      error: 'Team not found'
    });
  }

  if (teamCredentials[team_id] !== password) {
    console.log(`❌ [${new Date().toLocaleTimeString()}] Failed login: ${team_id.toUpperCase()}`);
    return res.status(401).json({
      success: false,
      error: 'Invalid credentials'
    });
  }

  console.log(`✅ [${new Date().toLocaleTimeString()}] Login success: ${team_id.toUpperCase()}`);
  res.json({
    success: true,
    team_id
  });
});

// GET endpoint: Get team progress
app.get('/team-progress', (req, res) => {
  const teamId = req.query.team;
  
  // Validate team exists
  if (!teams[teamId]) {
    console.log(`❌ [${new Date().toLocaleTimeString()}] Invalid team: ${teamId}`);
    return res.status(404).json({ 
      error: 'Team not found',
      message: `Please enter a valid team ID (team1 to team20)`
    });
  }
  
  console.log(`📊 [${new Date().toLocaleTimeString()}] ${teamId.toUpperCase()} checked progress`);

  // Return team's unlock status
  res.json({
    teamId: teamId,
    unlocks: teams[teamId]
  });
});

// POST endpoint: Unlock a feature
app.post('/unlock-feature', (req, res) => {
  const { team_id, feature } = req.body;
  
  // Validate inputs
  if (!team_id || !feature) {
    console.log(`❌ [${new Date().toLocaleTimeString()}] Unlock attempt with missing data`);
    return res.status(400).json({ 
      error: 'Missing team_id or feature' 
    });
  }
  
  // Check if team exists
  if (!teams[team_id]) {
    console.log(`❌ [${new Date().toLocaleTimeString()}] Unlock attempt for non-existent team: ${team_id}`);
    return res.status(404).json({ 
      error: 'Team not found' 
    });
  }
  
  // Check if feature is valid
  const validFeatures = [
    'eventsUnlocked',
    'workshopsUnlocked',
    'accommodationUnlocked',
    'profileUnlocked',
    'logoutUnlocked'
  ];
  
  if (!validFeatures.includes(feature)) {
    console.log(`❌ [${new Date().toLocaleTimeString()}] Invalid feature: ${feature} for ${team_id}`);
    return res.status(400).json({ 
      error: 'Invalid feature name' 
    });
  }
  
  // Unlock the feature
  teams[team_id][feature] = true;
  
  // Extract feature name for readable output
  const featureName = feature.replace('Unlocked', '');
  console.log(`🎉 [${new Date().toLocaleTimeString()}] ${team_id.toUpperCase()} unlocked: ${featureName}`);
  
  // Return success response
  res.json({
    success: true,
    message: `Feature '${feature}' unlocked for ${team_id}`,
    teamData: teams[team_id]
  });
});

// POST endpoint: Submit quiz answer
app.post('/submit-quiz-answer', (req, res) => {
  const { team_id, question_id, is_correct, feature_to_unlock } = req.body;
  
  // Validate inputs
  if (!team_id || question_id === undefined || is_correct === undefined) {
    console.log(`❌ [${new Date().toLocaleTimeString()}] Quiz submission with missing fields`);
    return res.status(400).json({ 
      error: 'Missing required fields' 
    });
  }
  
  // Check if team exists
  if (!teams[team_id]) {
    console.log(`❌ [${new Date().toLocaleTimeString()}] Quiz submission for non-existent team: ${team_id}`);
    return res.status(404).json({ 
      error: 'Team not found' 
    });
  }
  
  // Log quiz attempt
  const result = is_correct ? '✅ CORRECT' : '❌ WRONG';
  console.log(`📝 [${new Date().toLocaleTimeString()}] ${team_id.toUpperCase()} - Question ${question_id}: ${result}`);
  
  // If correct answer, unlock next feature
  if (is_correct && feature_to_unlock) {
    const validFeatures = [
      'eventsUnlocked',
      'workshopsUnlocked',
      'accommodationUnlocked',
      'profileUnlocked',
      'logoutUnlocked'
    ];
    
    if (validFeatures.includes(feature_to_unlock)) {
      teams[team_id][feature_to_unlock] = true;
    }
  }
  
  // Update quiz progress
  if (is_correct) {
    teams[team_id].quizProgress = question_id;
  }
  
  res.json({
    success: true,
    message: is_correct ? 'Correct answer!' : 'Incorrect answer',
    teamData: teams[team_id]
  });
});

// Health check endpoint
app.get('/download-feature-templates.zip', (req, res) => {
  const featureTemplatesDir = path.join(__dirname, '../template/feature-templates');

  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename="feature-templates.zip"');

  const archive = archiver('zip', { zlib: { level: 9 } });

  archive.on('error', function(err) {
    console.error('❌ ZIP creation error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to create ZIP file' });
    } else {
      res.end();
    }
  });

  archive.pipe(res);
  archive.directory(featureTemplatesDir, 'feature-templates');
  archive.finalize();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running on port ' + PORT });
});

// Start server
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log(`🎯 ABACUS'26 Unlock Server started on http://localhost:${PORT}`);
  console.log(`📊 Teams initialized: team1 to team20`);
  console.log(`🔐 Team passwords pattern: AB26TEAM01 ... AB26TEAM20`);
  console.log(`🔓 Ready to receive feature unlock requests`);
  console.log('='.repeat(60) + '\n');
});
