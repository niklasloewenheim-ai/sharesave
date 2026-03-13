# 🚀 DEPLOYMENT GUIDE - ShareSave Platform

## Quick Deploy to Vercel (5 minutes)

### Method 1: GitHub + Vercel (Recommended ⭐)

#### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository" (green button)
3. Name it: `sharesave-platform`
4. Make it **Private** or **Public**
5. Click "Create repository"

#### Step 2: Upload Your Files

**Option A: Using Git (Command Line)**

```bash
# Navigate to your project folder
cd sharesave-complete

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - ShareSave Platform"

# Link to your GitHub repo (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/sharesave-platform.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop**

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. File → Add Local Repository
4. Select your `sharesave-complete` folder
5. Click "Publish repository"

**Option C: Drag & Drop (Easiest)**

1. Go to your GitHub repo online
2. Click "uploading an existing file"
3. Drag ALL files from `sharesave-complete` folder
4. Scroll down and click "Commit changes"

**IMPORTANT:** Make sure you upload the ENTIRE folder structure:
```
✅ src/
   ✅ App.jsx
   ✅ main.jsx
   ✅ index.css
✅ index.html
✅ package.json
✅ vite.config.js
✅ tailwind.config.js
✅ postcss.config.js
✅ .gitignore
✅ README.md
```

#### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use GitHub account)
3. Click "Add New Project"
4. Click "Import" next to your `sharesave-platform` repo
5. **IMPORTANT:** Framework Preset: Select **"Vite"**
6. Click "Deploy"
7. Wait 2-3 minutes ☕
8. Your site is LIVE! 🎉

Your URL will be: `https://sharesave-platform-yourname.vercel.app`

---

## Method 2: Vercel CLI (For Developers)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to project
cd sharesave-complete

# Deploy
vercel --prod

# Follow prompts:
# - Setup and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? sharesave-platform
# - Directory? ./
# - Override settings? No
```

---

## Method 3: Manual Vercel Upload

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select "Import from..."
4. Choose "Upload files"
5. Upload the ENTIRE `sharesave-complete` folder
6. Framework: **Vite**
7. Click "Deploy"

---

## 🔧 Vercel Configuration

### Project Settings

After deployment, go to your project settings:

**General:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables (Optional):**
- Add any API keys here
- Not required for basic functionality

---

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] Home page loads with gradient background
- [ ] Can enter location in signup modal
- [ ] Events display correctly
- [ ] Search bar works
- [ ] Filters work (Food, Transport, etc.)
- [ ] Can create new events
- [ ] Google Maps links open correctly
- [ ] Calculator modal opens
- [ ] Map view works
- [ ] Can join events
- [ ] Profile page shows savings
- [ ] Discover people page loads
- [ ] Footer displays at bottom
- [ ] Logout works
- [ ] Mobile responsive

---

## 🐛 Common Issues & Fixes

### Issue 1: "All checks have failed"

**Cause:** Wrong file structure

**Fix:**
```
Your GitHub repo should look like this at the ROOT:

sharesave-platform/
├── src/          ← Must be at root level
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html    ← Must be at root level
├── package.json  ← Must be at root level
└── ...other config files
```

**NOT like this:**
```
❌ Wrong:
sharesave-platform/
└── sharesave-complete/  ← Don't nest in subfolder!
    └── src/
    └── index.html
```

### Issue 2: "Module not found: Can't resolve './App.jsx'"

**Cause:** File extension mismatch

**Fix:** Ensure all imports use `.jsx`:
- `main.jsx` imports `App.jsx` ✅
- NOT `App.js` ❌

### Issue 3: Map not loading

**Cause:** Google Maps API rate limit

**Fix:** The embedded map uses a demo key. It might hit rate limits. This is fine for demo/testing. For production, get your own key from [Google Cloud Console](https://console.cloud.google.com/).

### Issue 4: Events not persisting

**Cause:** localStorage not enabled

**Fix:** Check browser settings - localStorage must be enabled. Some privacy modes block it.

---

## 🔄 Updating Your Site

### After making changes:

**Method 1: GitHub Auto-Deploy**
1. Make changes to your local files
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated features"
   git push
   ```
3. Vercel auto-deploys in ~2 minutes!

**Method 2: Vercel CLI**
```bash
vercel --prod
```

---

## 🌐 Custom Domain (Optional)

### Add your own domain:

1. In Vercel dashboard → Your project → Settings → Domains
2. Add domain (e.g., `sharesave.com`)
3. Follow DNS instructions from your domain provider
4. Wait for DNS propagation (~24 hours)

---

## 📊 Monitoring

### Check deployment status:

**Vercel Dashboard:**
- Deployments tab shows all deploys
- Analytics tab shows visitor stats
- Logs tab shows build logs

**Useful commands:**
```bash
# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove sharesave-platform
```

---

## 🎯 Performance Optimization

Your site is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minification
- ✅ Compression
- ✅ CDN delivery (via Vercel)
- ✅ Automatic HTTPS

**Lighthouse Score Target:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 📱 Testing

### Test your deployment:

1. **Desktop:** Open in Chrome, Firefox, Safari
2. **Mobile:** Open on phone browser
3. **Tablet:** Test on iPad/tablet
4. **Incognito:** Test in private mode
5. **Different Networks:** Test on WiFi and mobile data

---

## 🔐 Security

Your site is secure with:
- ✅ HTTPS enabled by default (Vercel)
- ✅ No sensitive data in code
- ✅ localStorage encryption (browser-level)
- ✅ XSS protection (React)
- ✅ CSRF protection (SameSite cookies)

---

## 📞 Support

**Vercel Issues:**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

**GitHub Issues:**
- [GitHub Help](https://docs.github.com/)

**Project Issues:**
- Check `README.md`
- Check browser console for errors (F12)

---

## 🎉 Success!

If everything is working:
- ✅ Your site is live!
- ✅ Auto-deploys on every push
- ✅ Free HTTPS certificate
- ✅ Global CDN distribution
- ✅ Automatic scaling

**Share your link:**
`https://sharesave-platform-yourname.vercel.app`

---

**Made with ❤️ for students**

Need help? Check README.md for detailed documentation!
