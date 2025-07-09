# Alex - Personal Portfolio Website

A modern, responsive personal website showcasing my experience as a Software & Biomedical Engineering graduate. Built with React, TypeScript, and designed for optimal performance and user experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Projects**: Showcase of personal projects with live demos
- **Professional Experience**: Detailed timeline of co-op terms and work experience
- **Contact Form**: Easy way for potential employers to get in touch
- **Performance Optimized**: Fast loading times and smooth interactions

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3 with custom design system
- **Routing**: React Router DOM
- **Deployment**: Netlify
- **Performance**: Web Vitals monitoring

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── *.css           # Component styles
├── pages/              # Main page components
│   ├── Home.tsx        # Landing page
│   ├── Experience.tsx  # Work experience page
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── *.css           # Page styles
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── *.css               # Global styles
```

## 🎨 Design System

The website uses a consistent design system with:
- **Color Palette**: Professional blues and grays
- **Typography**: Inter font family for readability
- **Spacing**: Consistent spacing scale
- **Components**: Reusable card, button, and form components
- **Animations**: Subtle hover effects and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mywebsite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with the production-ready files.

## 🌐 Deployment

This website is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

The `netlify.toml` file is already configured for optimal deployment.

## 📱 Pages Overview

### Home Page
- Hero section with introduction
- About section with key statistics
- Skills showcase
- Featured projects preview
- Call-to-action section

### Experience Page
- Timeline of work experience
- Detailed co-op term descriptions
- Education background
- Technical skills summary with progress bars

### Projects Page
- Filterable project gallery
- Project categories (Medical, Web, AI, Mobile)
- Live demo links
- GitHub repository links
- Detailed project descriptions

### Contact Page
- Contact form with validation
- Contact information
- Availability schedule
- Response time expectations

## 🎯 Key Features for Employers

- **Professional Presentation**: Clean, modern design that reflects attention to detail
- **Technical Showcase**: Demonstrates both software and biomedical engineering skills
- **Project Portfolio**: Live demos and code repositories for hands-on evaluation
- **Experience Timeline**: Clear progression through co-op terms and professional development
- **Easy Contact**: Multiple ways to get in touch for opportunities

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `src/pages/Home.tsx` - Personal introduction and stats
- `src/pages/Experience.tsx` - Work experience and education
- `src/pages/Projects.tsx` - Project details and links
- `src/pages/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Social links

### Styling
The design system uses CSS custom properties for easy theming:
- Primary colors in `src/index.css`
- Component-specific styles in individual CSS files
- Responsive breakpoints for mobile optimization

## 📈 Performance

- Optimized bundle size
- Lazy loading for better performance
- Web Vitals monitoring
- Responsive images and assets
- Fast loading times

## 🤝 Contributing

This is a personal portfolio website, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions about this website or collaboration opportunities, please reach out through the contact form on the website.

---

Built with ❤️ using React and TypeScript