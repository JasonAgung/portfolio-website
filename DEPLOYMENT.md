# Deployment Instructions

## Quick Deploy Commands

```bash
# 1. Add all files to git
git add .

# 2. Commit your changes
git commit -m "Initial portfolio website"

# 3. Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# 4. Push to GitHub
git push -u origin main
```

## Vercel Deployment

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your repository
5. Click "Deploy"

Your site will be live at: `https://portfolio-website-YOUR_USERNAME.vercel.app`

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically redeploy your site!