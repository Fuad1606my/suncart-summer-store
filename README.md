# SunCart – Summer Essentials Store

SunCart is a modern and responsive summer e-commerce web application built for Assignment Category A8 Jackfruit. The project is designed around a summer essentials shopping experience where users can browse seasonal products such as sunglasses, cooling fans, skincare items, water bottles, beach towels, summer outfits, and other hot-weather essentials.

The website includes a clean homepage, product listing, protected product details page, authentication system, user profile page, and profile update feature. The design is fully responsive for mobile, tablet, and desktop devices.

## Live Website

Live Link: https://your-live-link.vercel.app

## GitHub Repository

Repository Link: https://github.com/Fuad1606my/suncart-summer-store

## Project Purpose

The main purpose of this project is to build a professional e-commerce website using modern frontend technologies. This project focuses on routing, responsive UI design, authentication flow, protected pages, reusable components, static product data, and user-based profile features.

## Main Features

- Responsive summer-themed e-commerce design
- Persistent navbar and footer
- Home page with hero/banner section
- Popular products section
- Summer care tips section
- Top brands section
- Products listing page
- Static JSON product data
- Protected product details route
- Register page
- Login page
- Logout functionality
- User profile page
- Update profile information feature
- Mobile, tablet, and desktop responsive layout
- Route-based rendering using Next.js App Router
- Clean and reusable component structure
- Meaningful project structure for easy maintenance

## Authentication Features

- Users can register with name, email, and password
- Users can login using registered email and password
- Logged-in users can access protected routes
- Logged-out users are redirected from protected pages
- Navbar changes based on login state
- Logged-in user can see profile information
- User can update name and profile information

## Pages and Routes

| Route | Description |
| --- | --- |
| `/` | Home page with hero, popular products, care tips, and brands |
| `/products` | Shows all summer products |
| `/products/[id]` | Protected product details page |
| `/login` | Login page |
| `/register` | Register page |
| `/my-profile` | Protected user profile page |
| `/update-profile` | Protected update profile page |

## Product Data

The product information is stored in a local JSON file. The project includes summer-related products with the following information:

- Product ID
- Product name
- Brand
- Price
- Rating
- Stock
- Description
- Image
- Category

Example product categories include:

- Accessories
- Skincare
- Cooling
- Summer Fashion
- Outdoor Essentials

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Lucide React
- LocalStorage-based demo authentication
- JSON product data

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- `daisyui`
- `lucide-react`

## Project Structure

```txt
suncart-summer-store/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── products/
│   ├── login/
│   ├── register/
│   ├── my-profile/
│   └── update-profile/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
│   └── UpdateProfileForm.tsx
├── data/
│   └── products.json
├── lib/
│   ├── products.ts
│   └── demo-auth.ts
├── public/
│   └── products/
├── package.json
├── tailwind.config.ts
└── README.md