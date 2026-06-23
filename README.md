# Ritual Service Website

A modern, responsive, multilingual React website for **Shri Sagar Kshemkalyani**, Ramkund Teerth Purohit, Nashik. The website provides information about Vedic ritual services, Simhastha Kumbh Mela 2027, Guruji's background, FAQs, and contact options for devotees and families visiting Nashik.

---

## Features

### Home Section

* Hero section with spiritual branding
* Call-to-action buttons
* Direct Call & WhatsApp integration
* Smooth scrolling navigation

### About Guruji

* Information about Shri Sagar Kshemkalyani
* 20+ years of experience
* Namawali / Ancestral Records information
* Communities served:

  * Maharashtra
  * Uttar Pradesh
  * Gujarat
  * Telugu Community

### Services Section

* Pind Daan
* Asthi Visarjan
* Shraddha Vidhi
* Dashakriya Vidhi
* Narayan Nagbali
* Tripindi Shraddha
* Pitru Dosh Nivaran
* Service cards with hover effects

### Simhastha Kumbh Mela 2027

* Live countdown timer
* Shahi Snan dates
* Parva Snan Calendar
* Previous Kumbh Mela gallery carousel
* Ritual booking information

### FAQ Section

* Expandable accordion layout
* Frequently asked ritual-related questions

### Contact Section

* Click-to-call support
* WhatsApp integration
* Google Maps location
* Inquiry form that opens WhatsApp with pre-filled details

### Footer

* Quick links
* Services list
* Contact information
* Copyright information

### Multilingual Support

* English
* Hindi
* Gujarati
* Telugu

### Responsive Design

* Mobile Friendly
* Tablet Friendly
* Desktop Friendly

---

# Tech Stack

### Frontend

* React.js
* Vite
* CSS3

### Libraries

* React Router DOM (optional)
* Lucide React
* Swiper.js
* React i18next
* i18next

---

# Project Structure

```text
src/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   │
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   │
│   ├── Ribbon/
│   │   ├── Ribbon.jsx
│   │   └── Ribbon.css
│   │
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   │
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   │
│   ├── Services/
│   │   ├── Services.jsx
│   │   └── Services.css
│   │
│   ├── Simhastha/
│   │   ├── Simhastha.jsx
│   │   └── Simhastha.css
│   │
│   ├── FAQ/
│   │   ├── FAQ.jsx
│   │   └── FAQ.css
│   │
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
│
├── locales/
│   ├── en/
│   │   └── translation.json
│   │
│   ├── hi/
│   │   └── translation.json
│   │
│   ├── gu/
│   │   └── translation.json
│   │
│   └── te/
│       └── translation.json
│
├── i18n.js
├── App.jsx
├── main.jsx
└── index.css
```

---

# Installation

## Clone Repository

```bash
git clone "https://github.com/joshi-mrunal0110/ritual-service"
```

```bash
cd ranchod-narayan-kshemkalyani
```

---

## Install Dependencies

```bash
npm install
```

---

## Required Packages

### Lucide React

```bash
npm install lucide-react
```

### Swiper

```bash
npm install swiper
```

### Internationalization

```bash
npm install i18next react-i18next
```

---

# Running the Project

Start development server:

```bash
npm run dev
```

Open browser:

```text
http://localhost:5173
```

---

# Build for Production

```bash
npm run build
```

---

# Preview Production Build

```bash
npm run preview
```
Live Demo:https://ritual-service.vercel.app
---

# WhatsApp Integration

The Contact Form automatically generates a WhatsApp message:

```text
Name
Mobile Number
Selected Ritual
Message
```

and redirects users to:

```text
https://wa.me/919999999999
```

with pre-filled information.
---

# Simhastha Kumbh Mela 2027 Features

* Countdown Timer
* Important Shahi Snan Dates
* Parva Snan Calendar
* Previous Kumbh Gallery
* Ritual Booking Information

---

# SEO Keywords

* Ramkund Nashik Pandit
* Pind Daan Nashik
* Asthi Visarjan Nashik
* Narayan Nagbali Nashik
* Tripindi Shraddha Nashik
* Simhastha Kumbh Mela 2027
* Teerth Purohit Nashik
* Godavari Ghat Rituals

---

# Future Improvements

### Phase 2

* Backend Integration
* Admin Dashboard
* Online Booking System
* Payment Gateway
* Google Reviews Integration
* Photo Gallery Management
* Blog Section
* Email Notifications
* SMS Notifications

## Author

**Designed & Developed by Mrunal Joshi**

B.Tech CSE (Cyber Security)
ITM SLS Baroda University

---

## License

This project is developed for Ranchod Narayan Kshemkalyani and intended for informational and service purposes. All rights reserved. © 2026 Ranchod Narayan Kshemkalyani.
