# ⚡ QUICK START - Get Running in 5 Minutes!

## 📦 What You Got

**COMPLETE ShareSave Platform** with ALL features:
- ✅ Location signup
- ✅ Google Maps integration
- ✅ Savings calculator
- ✅ Event creation
- ✅ Profile & statistics
- ✅ User discovery
- ✅ Beautiful UI with gradients
- ✅ Footer, filters, search
- ✅ Mobile responsive

---

## 🚀 Option 1: Run Locally (Testing)

### Step 1: Install Node.js
Download from: https://nodejs.org/ (Get the LTS version)

### Step 2: Open Terminal/Command Prompt
- **Windows:** Press `Win + R`, type `cmd`, press Enter
- **Mac:** Press `Cmd + Space`, type `terminal`, press Enter
- **Linux:** Press `Ctrl + Alt + T`

### Step 3: Navigate to Project
```bash
cd path/to/sharesave-complete
```

### Step 4: Install Dependencies
```bash
npm install
```
Wait 2-3 minutes...

### Step 5: Run!
```bash
npm run dev
```

### Step 6: Open Browser
Browser will auto-open to: `http://localhost:3000`

**🎉 DONE! Your site is running!**

---

## 🌐 Option 2: Deploy to Web (Production)

### GitHub Method (Easiest):

1. **Create GitHub account:** https://github.com/signup
2. **Create new repository:**
   - Click "New" (green button)
   - Name: `sharesave-platform`
   - Click "Create repository"

3. **Upload files:**
   - Click "uploading an existing file"
   - Drag ENTIRE `sharesave-complete` folder
   - Click "Commit changes"

4. **Deploy to Vercel:**
   - Go to: https://vercel.com
   - Click "Sign up" (use GitHub)
   - Click "Import Project"
   - Select your `sharesave-platform` repo
   - Framework: **Vite**
   - Click "Deploy"
   - Wait 2 minutes ☕

5. **LIVE!** 🎉
   Your URL: `https://sharesave-platform-yourname.vercel.app`

---

## 📁 File Structure (What's Inside)

```
sharesave-complete/
├── src/
│   ├── App.jsx          ← ALL features in one file!
│   ├── main.jsx         ← React entry point
│   └── index.css        ← Styles
├── index.html           ← HTML template
├── package.json         ← Dependencies
├── vite.config.js       ← Build config
├── tailwind.config.js   ← Design config
├── README.md            ← Full documentation
├── DEPLOYMENT.md        ← Detailed deployment guide
└── QUICKSTART.md        ← This file!
```

---

## ✅ Feature Checklist (Everything Included!)

- ✅ **Signup Modal** - Location-based entry
- ✅ **Hero Section** - Beautiful gradient with stats
- ✅ **Search Bar** - Search all events
- ✅ **Filters** - Food, Transport, Accommodation, Events
- ✅ **Event Cards** - With categories, prices, savings
- ✅ **Google Maps** - "Open in Maps" + "Get Directions"
- ✅ **Map View** - See all events on map
- ✅ **Calculator** - Interactive savings calculator
- ✅ **Create Events** - Users can add events
- ✅ **Edit/Delete** - Manage user-created events
- ✅ **Join Events** - Track joined events
- ✅ **Like Events** - Favorite/bookmark events
- ✅ **Profile Page** - Total savings, statistics
- ✅ **Discover People** - Connect with users
- ✅ **Subscription Tiers** - Free & Premium (£5.99)
- ✅ **Footer** - Professional with social links
- ✅ **Logout** - Clear data and reset
- ✅ **Responsive** - Works on all devices
- ✅ **Animations** - Smooth transitions
- ✅ **localStorage** - Data persists

---

## 🎨 Customization (Make It Yours!)

### Change Colors:
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { 600: '#2563eb' },  // Blue
  secondary: { 600: '#9333ea' } // Purple
}
```

### Change Text:
Edit `src/App.jsx`, search for:
- `"Share & Save Together"` - Hero title
- `"Made with ❤️ for students"` - Footer

### Add Events:
Edit `src/App.jsx`, find `realEventsData` array, add:
```javascript
{
  id: 'my-event-1',
  type: 'food',
  title: 'Pizza Night',
  // ... copy format from existing events
}
```

---

## 🐛 Troubleshooting

### "npm not found"
→ Install Node.js from https://nodejs.org/

### "Port 3000 is already in use"
→ Change port in `vite.config.js`:
```javascript
server: { port: 3001 }
```

### Events not saving
→ Check if localStorage is enabled in browser settings

### Map not loading
→ This is normal - demo API key has rate limits

---

## 📱 Test Your Site

After deployment, test:
- ✅ Open site on desktop
- ✅ Open site on phone
- ✅ Try creating an event
- ✅ Try joining an event
- ✅ Check profile savings
- ✅ Open map view
- ✅ Use calculator

---

## 🎯 Next Steps

1. **Customize branding** - Change colors, logo, text
2. **Add real events** - Replace demo data
3. **Connect payment** - Integrate Stripe for Premium
4. **Add backend** - Firebase/Supabase for real-time data
5. **Mobile app** - Convert to React Native

---

## 📚 Documentation

- **README.md** - Full feature documentation
- **DEPLOYMENT.md** - Step-by-step deployment
- **This file** - Quick start guide

---

## 🆘 Need Help?

**Common questions:**

**Q: How do I change the location?**
A: Click "Logout" in profile, then re-enter location

**Q: Can I use my own domain?**
A: Yes! In Vercel: Settings → Domains

**Q: Is this production-ready?**
A: Yes for demo/MVP! For production: add backend, auth, payments

**Q: Can I sell this?**
A: It's for educational use. Modify and use as you wish!

---

## ✨ Features Explained

### For Users:
1. Enter location → See nearby events
2. Browse/search events
3. Join events to split costs
4. Track total savings in profile

### For Event Creators:
1. Click "Create Event"
2. Fill in details
3. Share with others
4. Edit/delete anytime

### For Premium Users (£5.99/month):
- Unlimited events (vs 3/month free)
- All categories (vs food-only free)
- Priority support

---

## 🎉 You're Ready!

**Local testing:**
```bash
npm run dev
```

**Deploy to web:**
Upload to GitHub → Import to Vercel → Done!

**Your site will be live at:**
`https://your-project-name.vercel.app`

---

**Questions? Check README.md for full details!**

**Made with ❤️ for students** 🎓
