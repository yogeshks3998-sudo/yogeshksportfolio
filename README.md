# Yogesh K S — Personal Portfolio & Engineering Showcase

A modern, high-performance developer portfolio built with **Next.js**, **React**, and **SCSS**, featuring dynamic project showcases, client testimonials, smooth animated hero headlines, and integrated contact form messaging via **EmailJS**.

---

## 🚀 Features

- **Dynamic Hero Section**: Rotates across core specializations (*App & Software Developer*, *Full Stack Web Developer*, *SaaS & Web App Engineer*, *E-Commerce Web Specialist*) with smooth CSS transitions.
- **Project Showcase**: Detailed case studies with architectural overviews, live website links, client credits, and project metrics.
- **Client Testimonials**: Verified testimonials from real clients (*Marvella Buildtech*, *Riyom Infraa*, *Parinitha Technologies*, *Aikya Ventures*, *Lexaum LLP*, *Sri Sumeru Realty*).
- **Working Contact Form**: Direct Gmail inbox integration using `@emailjs/browser` with validation, duplicate-submission protection, and loading/success/error alerts.
- **Theme Switcher**: Smooth toggle between Light and Dark themes.
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Static Site Generation / SSG)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: SCSS, Bootstrap Grid, Animate.css, Flaticon, Themify, FontAwesome
- **Components**: Slick Carousel, React Scroll, Styled Components
- **Email Service**: [EmailJS](https://www.emailjs.com/)

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 🌐 Free Live Deployment

### Deploy to Vercel (Recommended — Free & 1-Click)
1. Push this repository to your **GitHub** account.
2. Sign in to [Vercel](https://vercel.com/) with GitHub.
3. Click **"Add New"** > **"Project"** and select your portfolio repository.
4. Keep the default settings (Framework preset: Next.js).
5. Add the Environment Variables from `.env.example` (or rely on the defaults).
6. Click **Deploy**. Your portfolio will be live with a free `.vercel.app` domain and free SSL!

### Deploy to Netlify (Free)
1. Push repository to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/) and click **"Add new site"** > **"Import an existing project"**.
3. Select your GitHub repository.
4. Build command: `npm run build` | Publish directory: `.next`
5. Click **Deploy Site**.

---

## 📄 License
All rights reserved © Yogesh K S.
