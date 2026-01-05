# Captionify – Frontend

Captionify Frontend is the client-facing application that enables users to upload images, generate AI-powered captions, and manage their sessions securely. The frontend prioritizes usability, responsiveness, and seamless interaction with AI-driven backend services.

---

## Product Philosophy

The UI is designed to be simple and distraction-free, allowing users to focus on content creation rather than configuration. The frontend acts as a thin, reliable layer over backend intelligence.

---

## Engineering Focus

- Component-based React architecture
- Secure authentication flow using Firebase
- Efficient API communication with backend services
- Optimized image upload and preview handling
- Responsive design for creator workflows

---

## Tech Stack

- **Framework:** React.js
- **Authentication:** Firebase
- **Styling:** CSS
- **Media Uploads:** Cloudinary (via backend)
- **Deployment:** Vercel

---

## Key Features

- Image upload and preview
- AI caption request flow
- Secure login and session handling
- Responsive UI for fast iteration
- Clear error and loading states

---

## Architecture Overview

- React components manage UI and local state
- Authentication handled via Firebase SDK
- Backend APIs handle AI requests and data processing
- Minimal frontend logic to maintain maintainability

---

## Setup Instructions

1. Clone the repository
2. Install dependencies:npm install
3. Configure environment variables
4. Start the development server: npm start

REACT_APP_API_BASE_URL=
REACT_APP_FIREBASE_API_KEY=


