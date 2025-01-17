# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Styled Components. Features a dynamic UI with smooth animations and a unique mouse-following gradient effect.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dynamic Content**: Content sections that flip and animate smoothly
- **Interactive Navigation**: Smooth scrolling navigation with hover effects
- **Social Media Integration**: Easy-to-configure social media links
- **Markdown Support**: Content sections support Markdown formatting
- **Theme Support**: Customizable theming system
- **Mouse-following Gradient**: Interactive background gradient that follows cursor movement

## 🛠 Tech Stack

- React 18
- TypeScript
- Styled Components
- React Markdown
- React Icons
- GitHub Actions (CI/CD)
- AWS (S3 & CloudFront for hosting)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📦 Building for Production

```bash
npm run build
```

## 🧪 Quality Checks

Run all quality checks:
```bash
make ci
```

Individual checks:
- Linting: `npm run lint`
- Type checking: `npm run type-check`
- Code formatting: `npm run format`

## 🔧 Configuration

### Profile Information
Update your personal information in `src/constants/profile.json`:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "description": "Your Description"
}
```

### Social Links
Modify social media links in the SocialBar component:
```typescript:src/components/SocialBar/SocialBar.tsx
startLine: 5
endLine: 26
```

### Theme Customization
Customize the theme in `src/styles/theme.ts`:
```typescript:src/styles/theme.ts
startLine: 1
endLine: 45
```

## 🚀 Deployment

The project includes GitHub Actions workflow for automated deployment to AWS S3 and CloudFront. Configure the following secrets in your GitHub repository:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID` (optional)

## 📁 Project Structure

```
src/
├── components/       # React components
├── constants/        # Configuration files
├── styles/          # Global styles and theme
└── types/           # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React Icons for the icon library
- React Markdown for markdown rendering
- Styled Components for the styling system
