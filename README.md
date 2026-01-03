# Tushar Das | AI Engineer Portfolio

A stunning, futuristic portfolio website showcasing my work as an AI Engineer specializing in LLMs, Multi-Agent Systems, and MLOps.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=flat&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=flat&logo=framer)

## Features

- **Futuristic Cyberpunk Design** - Deep space aesthetics with glassmorphism effects
- **Interactive Animations** - Smooth scroll-triggered animations powered by Framer Motion
- **Typewriter Effect** - Dynamic role carousel in the hero section
- **Responsive Design** - Fully responsive with mobile hamburger menu
- **Glassmorphism Cards** - Modern frosted glass card design throughout
- **Gradient Accents** - Electric purple/cyan/magenta color palette
- **Floating Orbs** - Animated gradient background effects

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching intro with typewriter effect, tech stack pills, and social links |
| **About** | Bento grid layout with bio, stats, skills by category, and location |
| **Projects** | 5 featured AI/ML projects with gradient cards and hover effects |
| **Experience** | Timeline-based work history with animated entries |
| **Contact** | Social links with copy-to-clipboard functionality |
| **Footer** | Navigation, social icons, and scroll-to-top button |

## Featured Projects

1. **The Neural Navigator** - Multi-modal neural network for map navigation
2. **DebateAI** - Real-time debate platform with AI opponents (AOSSIE)
3. **Voice-First Government Assistant** - Hindi voice assistant for govt schemes
4. **Leave Assistant Agent** - Multi-agent HR assistant with LangGraph
5. **Visa Prediction MLOps** - End-to-end MLOps pipeline

## Tech Stack

- **Frontend**: React 19, Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Fonts**: Inter, Outfit (Google Fonts)
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Tushar7012/My-Portfolio.git

# Navigate to project directory
cd My-Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will run at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

This portfolio can be deployed on:

- **Render** - Connect your GitHub repo and deploy as a Static Site
- **Vercel** - One-click deploy from GitHub
- **Netlify** - Drag and drop the `build` folder
- **GitHub Pages** - Use `gh-pages` package

### Deploy on Render

1. Go to [render.com](https://render.com) and create a new Static Site
2. Connect your GitHub repository
3. Set build command: `npm install && npm run build`
4. Set publish directory: `build`
5. Deploy!

## Project Structure

```
My-Portfolio/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   └── models/             # 3D model assets (if any)
├── src/
│   ├── assets/             # Images and static assets
│   ├── components/
│   │   ├── Navbar.js       # Responsive navigation with mobile menu
│   │   ├── Hero.jsx        # Hero section with typewriter effect
│   │   ├── About.jsx       # Bento grid about section
│   │   ├── Projects.jsx    # Featured projects showcase
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Contact.jsx     # Contact cards with copy functionality
│   │   └── Footer.jsx      # Footer with social links
│   ├── App.js              # Main app with floating orbs background
│   ├── index.css           # Global styles and design system
│   └── index.js            # React entry point
├── tailwind.config.js      # Extended Tailwind configuration
├── package.json
└── README.md
```

## Customization

### Colors

Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --color-purple: #a855f7;
  --color-cyan: #22d3ee;
  --color-magenta: #f472b6;
}
```

### Projects

Update the `projectsData` array in `src/components/Projects.jsx` to add your own projects.

### Personal Info

- Update bio in `src/components/About.jsx`
- Update experience in `src/components/Experience.jsx`
- Update contact links in `src/components/Contact.jsx`

## Performance

- Optimized animations with GPU acceleration
- Lazy loading for images
- Code splitting with React
- Minimal dependencies

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Tushar Das** - AI Engineer

- GitHub: [@Tushar7012](https://github.com/Tushar7012)
- LinkedIn: [Tushar Das](https://www.linkedin.com/in/tushar-d-2454a5376)
- Email: td220627@gmail.com

---

Built with React, Tailwind CSS, and Framer Motion
