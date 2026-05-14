# Deployment Instructions for Vercel

Follow these steps to deploy your portfolio to [Vercel](https://vercel.com) and connect your custom domain `mollyxie.com`.

## 1. Push to GitHub
1. Create a new repository on GitHub (e.g., `molly-portfolio`).
2. Initialize git in your local project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Link your local repo to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/molly-portfolio.git
   git branch -M main
   git push -u origin main
   ```

## 2. Import to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project**.
3. Import your GitHub repository (`molly-portfolio`).

## 3. Configure Build Settings
Vercel usually detects Vite automatically, but ensure these settings are correct:
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- Click **Deploy**.

## 4. Add Custom Domain
1. In your Vercel project dashboard, go to **Settings** > **Domains**.
2. Type `mollyxie.com` into the input field and click **Add**.
3. Vercel will suggest adding `www.mollyxie.com` as well. Select **"Add www.mollyxie.com and redirect mollyxie.com to it"** (or vice versa, depending on your preference).

## 5. Update DNS Records
Login to your domain registrar (e.g., Namecheap, GoDaddy, Google Domains) and update the records as shown in the Vercel dashboard:

### For the Root Domain (`mollyxie.com`):
- **Type**: `A`
- **Name**: `@`
- **Value**: `76.76.21.21`

### For the WWW subdomain (`www.mollyxie.com`):
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`

## 6. Verify and SSL
1. Wait a few minutes (DNS propagation can take up to 24-48 hours, but usually takes minutes).
2. Vercel will automatically generate an SSL certificate for you.
3. Check both `http://mollyxie.com` and `http://www.mollyxie.com` in your browser.

## 7. Primary Domain & Redirects
1. In Vercel **Settings** > **Domains**, one domain will have a "Primary" badge.
2. If you want everyone to see `mollyxie.com` (no www), set the root as Primary. The `www` version will automatically redirect to it.
## 8. Handling Assets (Logos & Resume)
Before pushing to GitHub, ensure you have placed your files in the following locations:
- **Resume**: Save your `resume.pdf` in the root folder (or update the path in `App.tsx`).
- **Logos**: Place the logo images you provided in a folder named `src/assets/` with these filenames:
  - `csc-logo.png` (Computer Science Club)
  - `dsc-logo.png` (Data Science Club)
  - `wics-logo.png` (Women in Computer Science)
  - `technovation-logo.png` (Technovation Girls)
  - `waterloo-math-logo.png` (Waterloo Math)

If you use different filenames, make sure to update the `involvements` array in `/src/App.tsx`.
