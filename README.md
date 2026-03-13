# ShareSave Platform

A minimalist cost-sharing platform for students to split costs on food, transport, events, and accommodation.

## Features

- ✅ Real London events integration
- ✅ Create, edit, and delete events
- ✅ LocalStorage persistence
- ✅ Savings calculator
- ✅ User profiles and connections
- ✅ Two-tier subscription model
- ✅ Minimalist, clean design

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)
- LocalStorage API

## Project Structure

```
sharesave-platform/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles + Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Live Events

The platform includes real London events sourced from:
- ABBA Voyage Concert
- Restaurant deals (DanDan, Gloria, Amazing Grace)
- West End shows (Wicked)
- Transport sharing opportunities
- Weekend accommodation trips

All events support cost-splitting with automatic savings calculations.
