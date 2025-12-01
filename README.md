# Tushar Tuteja - Professional Portfolio Website

A modern, responsive, and modular portfolio website built with Next.js 16, React, and TypeScript.

## 🚀 Features

- **Modular Architecture**: Clean component-based structure for easy maintenance and scalability
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Attractive gradients, smooth animations, and interactive elements
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Interactive Components**: Hover effects, animations, and engaging user interactions

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main page
│   └── components/
│       ├── Navigation.tsx       # Fixed navigation bar
│       ├── Hero.tsx             # Landing section with intro
│       ├── Experience.tsx       # Work experience timeline
│       ├── Projects.tsx         # Featured projects showcase
│       ├── Skills.tsx           # Skills & achievements
│       └── Contact.tsx          # Contact information & footer
├── public/
│   └── Tushar's_Resume.pdf      # Resume PDF
└── package.json
```

## 🎨 Sections

### 1. **Hero Section**
- Eye-catching gradient background
- Interactive code snippet visualization
- Social media links (GitHub, LinkedIn, Email, Phone)
- Call-to-action buttons

### 2. **Experience Section**
- Timeline-based layout
- Detailed work history with highlights
- Project breakdowns for each role
- Animated cards with hover effects

### 3. **Projects Section**
- Grid layout showcasing featured projects
- Tech stack badges
- GitHub and live demo links
- Project highlights and achievements

### 4. **Skills Section**
- Categorized skill display
- Interactive progress bars
- Achievement cards with animations
- Icon-based technology representation

### 5. **Contact Section**
- Multiple contact methods
- Call-to-action with resume download
- Social media links
- Footer with copyright

## 🛠️ Technologies Used

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Font**: System fonts with fallbacks

## 📦 Installation & Setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Customization

### Update Personal Information

1. **Contact Details**: Edit `src/components/Hero.tsx` and `src/components/Contact.tsx`
2. **Work Experience**: Modify the `experiences` array in `src/components/Experience.tsx`
3. **Projects**: Update the `projects` array in `src/components/Projects.tsx`
4. **Skills**: Customize `skillCategories` in `src/components/Skills.tsx`

### Change Color Scheme

The primary gradient colors can be changed in the CSS modules:
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (purple)
- Accent: `#ffd700` (gold)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

## 🌟 Key Features Implemented

✅ Smooth scroll navigation
✅ Mobile-responsive hamburger menu
✅ Animated components on scroll
✅ Interactive hover effects
✅ Progress bars for skills
✅ Timeline for experience
✅ Card-based layouts
✅ Gradient backgrounds
✅ Social media integration
✅ Resume download functionality

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js)

## 👤 Author

**Tushar Tuteja**
- Email: tushartuteja19@gmail.com
- X (Twitter): [x.com/0xtushartuteja](https://x.com/0xtushartuteja)
- LinkedIn: [linkedin.com/in/tushartuteja](https://linkedin.com/in/tushartuteja)
- GitHub: [github.com/tushartuteja](https://github.com/tushartuteja)

---

Built with ❤️ using Next.js and React


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
