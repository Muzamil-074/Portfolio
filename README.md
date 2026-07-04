# 🌌 Premium Portfolio Website — Muzamil Dars

This is a world-class, premium, modern, and highly interactive developer portfolio built for **Muzamil Dars** (AI Engineer & Full Stack Web Developer). Inspired by high-end design languages of Apple, Vercel, Linear, and Stripe.

## ✨ Core Features & Visual Accents

-   **📱 Fully Responsive**: Desktop-first precision with absolute mobile and tablet viewport optimization.
-   **🎨 Dark & Light Modes**: Remembered theme preferences utilizing a seamless toggling context and custom color schemes.
-   **⏳ Futuristic Loader**: Agency-style counting entrance loader counting from 0% to 100% with a glowing logo.
-   **🖱️ Custom Cursor Glow**: Reactive mouse-flashlight glow and responsive click animations on desktop viewports.
-   **📈 Dynamic Circular Meters**: Custom SVG-driven, fully animated circular progress gauges tracking skill percentages.
-   **📊 Mock GitHub Telemetry**: A green commit contribution graph simulation, pinned repositories, and language percentage bars.
-   **🖼️ 3D Card Perspective Hover**: Fully self-contained tilt tracking engine driving project card layouts.
-   **📬 Interactive Contact Form**: Full form inputs with input validation, loaders, and success pop-up alerts.
-   **📜 Smooth Offset Scrolling**: Seamless scrolling to target anchors (Home, About, Skills, Services, Projects, etc.).

---

## 📂 Folder & Component Architecture

-   `/src/types.ts`: Holds shared, clean TypeScript definitions for skills, projects, and experiences.
-   `/src/context/ThemeContext.tsx`: Persistent theme state management.
-   `/src/data/portfolioData.ts`: Decoupled content database for easy customization.
-   `/src/components/`:
    -   `Navbar.tsx`: Shrinking sticky navigation bar with a mobile hamburger overlay.
    -   `Hero.tsx`: Title animations with orbiting floating technology badges.
    -   `About.tsx`: Narrative timeline with a complete personal overview.
    -   `Skills.tsx`: Interactive circular gauges with category toggles.
    -   `Statistics.tsx`: Viewport-triggered sliding animated counters.
    -   `Services.tsx`: Multi-card glass grid illustrating specialist offerings.
    -   `Projects.tsx`: 3D hover zoom project cards with collapsible details.
    -   `Experience.tsx` & `Education.tsx`: Vertical chronologies anchored by logos.
    -   `Certifications.tsx`: Direct external credential links.
    -   `Testimonials.tsx`: Swipe-supported testimonial slide system.
    -   `TechStack.tsx`: Quick toolkit icon displays with subtle radial overlays.
    -   `GithubSection.tsx`: Git metrics dashboard.
    -   `Contact.tsx`: Modern split layout form with submission alerts.
    -   `Footer.tsx`: Nav links, social link maps, and a Back-To-Top trigger.

---

## 🛠️ Setup & Running Locally

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start development server**:
    ```bash
    npm run dev
    ```
3.  **Compile & bundle for production**:
    ```bash
    npm run build
    ```

---

## 📬 Customizing Form Submissions

The Contact Form in `/src/components/Contact.tsx` is equipped with a smooth, interactive fallback submission engine that simulates actual server transactions.

To integrate live direct delivery using **EmailJS**:
1.  Sign up for a free tier at [EmailJS](https://www.emailjs.com/).
2.  Install the EmailJS package:
    ```bash
    npm install @emailjs/browser
    ```
3.  Import it and update the submit handler in `Contact.tsx`:
    ```typescript
    import emailjs from '@emailjs/browser';

    // inside handleSubmit:
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('success');
      }, () => {
        setStatus('error');
      });
    ```
