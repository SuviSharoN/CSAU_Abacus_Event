# ABACUS'26 Symposium Website - Unlock Challenge System

Welcome to the ABACUS'26 Symposium website unlock challenge system!

## 🚀 Quick Start

### 1. Install Backend Dependencies
```bash
cd backend
npm init -y
npm install express cors
```

### 2. Start the Server
```bash
node server.js
```

You should see:
```
🎯 ABACUS'26 Unlock Server running on http://localhost:3000
📊 Teams initialized: team1 to team20
```

### 3. Open Admin Panel
- Open `admin/admin.html` in your browser

### 4. Open Team Website
- Open `template/index.html` in your browser
- Enter Team ID when prompted (e.g., team1)

## 📋 Features

- **20 Teams** with independent unlock status
- **6 Unlockable Features**: Registration, Events, Workshops, Accommodation, Profile, Leaderboard
- **Real-time Polling** - Website updates every 10 seconds
- **Admin Panel** - Simple one-click unlock system
- **ABACUS'26 Branding** - Gold + Dark theme

## 🔧 How It Works

1. Team enters ID on website
2. Website polls server every 10 seconds
3. Admin unlocks features via control panel
4. Team website instantly shows unlocked features
5. Buttons become active, sections become visible

## 📁 File Structure

```
blackout_2/
├── backend/
│   ├── server.js
│   └── package.json
├── admin/
│   └── admin.html
├── template/
│   ├── index.html
│   ├── events.html
│   ├── workshops.html
│   ├── accommodation.html
│   ├── profile.html
│   ├── style.css
│   └── app.js
└── README.md
```

## 🎯 Setup Tips

- Keep backend terminal open while testing
- Valid Team IDs: team1 to team20
- Buttons disabled until unlocked
- Changes show within ~10 seconds

## 💡 Testing

1. Start server: `node backend/server.js`
2. Open admin panel and unlock a feature for team1
3. Open website as team1 and watch it unlock!

---

**ABACUS'26 - Where Analytics Meets Innovation** 🚀
