# SunCart - Summer Essentials Store

SunCart is a modern summer ecommerce website built with Next.js App Router. Users can browse summer products, log in/register with BetterAuth, view protected product details, and manage profile information.

## Purpose

This project was created for the Category A8 Jackfruit assignment: a professional summer ecommerce platform for products such as sunglasses, skincare, outfits, beach accessories, portable cooling items, and hydration gear.

## Live URL

Add your deployed link here after hosting:

```txt
https://your-suncart-live-link.vercel.app
```

## Key Features

- Responsive design for mobile, tablet, and desktop
- Persistent navbar and footer across all routes
- Home page with hero sale banner, popular products, summer care tips, and top brands
- Static JSON product data with 8 summer products
- Products page with all product cards
- Protected product details route
- BetterAuth email/password login and registration
- Google social login button
- Protected My Profile page
- Profile update form for name and image URL
- Toast messages for login, register, logout, and profile update states
- Environment variable based secure configuration
- DaisyUI + Tailwind CSS themed UI
- Animate.css package implemented in the hero section

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- BetterAuth
- PostgreSQL auth database through `DATABASE_URL`
- Animate.css
- React Hot Toast
- Lucide React

## NPM Packages Used

```txt
next
react
react-dom
better-auth
pg
tailwindcss
daisyui
animate.css
react-hot-toast
lucide-react
clsx
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required variables:

```env
BETTER_AUTH_SECRET="replace-with-a-strong-secret"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
DATABASE_URL=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

Generate a strong secret:

```bash
openssl rand -base64 32
```

For Vercel deployment, add these variables in Vercel Project Settings. Use a Postgres provider such as Neon, Supabase, or Railway and paste its connection string into `DATABASE_URL`.

## Google OAuth Setup

1. Open Google Cloud Console.
2. Create an OAuth client for a Web Application.
3. Add local redirect URI:

```txt
http://localhost:3000/api/auth/callback/google
```

4. Add deployed redirect URI after hosting:

```txt
https://your-live-domain.vercel.app/api/auth/callback/google
```

5. Paste the client ID and secret into `.env.local` and your hosting environment variables.

## Run Locally

```bash
npm install
npm run auth:migrate
npm run dev
```

Open:

```txt
http://localhost:3000
```

`npm run auth:migrate` creates the required BetterAuth tables in your PostgreSQL database.

## Deployment Notes

Recommended deployment: Vercel.

Before deployment:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add all environment variables.
4. Use Postgres through `DATABASE_URL`.
5. Run BetterAuth migration for the production database:

```bash
npm run auth:migrate
```

Then deploy. Next.js App Router routes can be refreshed directly on Vercel without SPA route reload errors.

## Suggested Meaningful Git Commits

Use at least 10 meaningful commits. Example sequence:

```txt
git add . && git commit -m "Initialize Next.js summer ecommerce project"
git add . && git commit -m "Configure Tailwind DaisyUI and global theme"
git add . && git commit -m "Add summer product JSON data and local SVG assets"
git add . && git commit -m "Build persistent navbar and footer layout"
git add . && git commit -m "Create home hero sale banner and popular products"
git add . && git commit -m "Add summer care tips and top brands sections"
git add . && git commit -m "Create products listing and protected details routes"
git add . && git commit -m "Configure BetterAuth API route and auth client"
git add . && git commit -m "Build login and register pages with Google login button"
git add . && git commit -m "Add protected profile page and update information form"
git add . && git commit -m "Write README setup deployment and submission checklist"
```

## Submission

```txt
Your Github Repo Link: https://github.com/Fuad1606my/suncart-summer-store
Your Live Link: https://your-live-link.vercel.app
```
