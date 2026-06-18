# TIANA LUX | Luxury Beauty House Website

Welcome to the luxury web platform for **Tiana Lux**, an elite beauty house based in Canada. 

This website is built as a highly responsive, modern, and performant **Single Page Application (SPA)** using native ES Modules (Vanilla HTML, JS, and CSS). This design guarantees a "wow" visual first impression, featuring smooth 3D CSS hover card actions, interactive sliders, custom booking wizards, and a persistent local CMS dashboard—all running directly in the browser with **zero local build steps or npm installations** required.

---

## Key Features

1. **Cinematic Hero Landing**: Full-screen video background with dynamic gold-accents and scrolling micro-animations.
2. **Interactive Before/After Sliders**: Drag the custom gold-accent slider handles to dynamically wipe and compare procedurals (brow maps, lash lifts, loc installations).
3. **Multi-Step Booking Wizard**: Filter services, pick dates on a custom calendar, choose active slots, enter client details, and calculate remaining balances.
4. **Visual Payment Simulator**: Choose to pay deposit or full pricing. Input card numbers, holder name, and expiry dates to see them bind and render onto a 3D-styled dark obsidian credit card mockup in real-time.
5. **Printable Invoice Receipts**: Instantly generates detailed print-formatted invoices with simulated email dispatch notifications.
6. **Local Database & Persistent CMS**: 
   - Manage incoming bookings (approve/cancel).
   - Change catalog service names, prices, durations, and description details.
   - Mock-upload device procedure photos using the uploader simulator.
   - Publish SEO-optimized beauty articles.
   - Read and reply to customer inquiries.
   - *Note: All updates save directly to the browser's `localStorage` so changes persist on refresh.*

---

## How to Preview Locally

Because the application uses native modular ES6 JavaScript, it does not require node packaging tools. You can run it locally using any standard static file server:

### Option A: VS Code Live Server (Recommended)
1. Open the `tianalux` folder in Visual Studio Code.
2. Click **Go Live** in the bottom-right corner of the editor.
3. The site will open automatically at `http://127.0.0.1:5500`.

### Option B: Local Terminal Python Server
If you have Python installed, open your shell in the `tianalux` directory and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## How to Deploy to Vercel via GitHub

Vercel makes deploying static websites extremely simple. Follow these steps to host Tiana Lux live for free:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New Repository**.
3. Name it (e.g. `tiana-lux-website`) and set it to **Public** or **Private**, then click **Create Repository**.

### Step 2: Push Your Code to GitHub
Open your terminal (PowerShell, Command Prompt, or Git Bash) inside the `tianalux` directory and run the following commands:

```bash
# Initialize a local git repository
git init

# Add all project files
git add .

# Create the initial commit
git commit -m "feat: initial commit of tiana lux luxury website"

# Link your local project to your new GitHub repository
# (Replace USERNAME and REPO-NAME with your GitHub details)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Set default branch to main and push
git branch -M main
git push -u origin main
```

### Step 3: Import Project to Vercel
1. Go to [Vercel](https://vercel.com) and log in (or sign up using your GitHub account).
2. Click the **Add New...** button and select **Project**.
3. Under **Import Git Repository**, locate your `tiana-lux-website` repository and click **Import**.
4. **Configure Project**:
   - Leave the **Framework Preset** as **Other**.
   - Leave the **Build and Output Settings** at their default values (since it's a static site, no build command is needed).
5. Click **Deploy**.
6. Vercel will build and host your site in under 10 seconds and generate a custom URL (e.g. `tiana-lux-website.vercel.app`)!

---

## Project Structure
- `index.html`: The base markup template loading fonts, icon CDNs, preloader shell, and toast managers.
- `styles.css`: Visual styling, grids, variables, inputs, and animations.
- `state.js`: Local storage data persister, default catalogue lists, and database setters.
- `app.js`: Client-side router mapping hash URLs, loading pages, and controlling global modal actions.
- `/pages/`: Houses individual layouts (Home, About, Services catalogue, Portfolio wall, Blog page, Contact panel, and Dashboard wrapper).
- `/components/`: Wizard helpers (Navbar header, Footer banner, BeforeAfter handles, Booking calendar, Payment card binding, Client lists, Admin CMS panel).
