# Jason Kelvin Agung - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode toggle (defaults to light mode)
- 📱 Fully responsive design for mobile and desktop
- ⚡ Fast page loads with Next.js
- 🎨 Clean and professional design
- 📄 Multiple pages: Home, About, Experience, Education, Projects

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment on Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your site will be live!

### Environment Variables

No environment variables are required for this portfolio website.

## Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── education/         # Education page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   └── SocialLinks.tsx    # Social media links
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme provider
├── public/                # Static assets
├── package.json           # Dependencies
└── tailwind.config.ts     # Tailwind configuration
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Context** - State management for theme

## Contact

- Email: jason.kelvin.agung@gmail.com
- LinkedIn: [jasonkelvinagung](https://linkedin.com/in/jasonkelvinagung)
- Instagram: [@jasonkelvinagung](https://instagram.com/jasonkelvinagung)

## License

This project is open source and available under the MIT License.
