# **App Name**: LifeOS

## Core Features:

- Secure User Authentication: Implements robust email/password authentication using Firebase Authentication, with support for biometric login (e.g., WebAuthn) where natively supported by the user's device and browser for enhanced security.
- Encrypted Data Vault: Provides a secure, client-side encrypted vault for sensitive documents, photos, and passwords. Data is encrypted using AES-256 before being transmitted and saved to Firestore.
- Comprehensive Financial Tracking: Web-based tools to manage and visualize bills, income, expenses, and purchases. Includes secure, encrypted storage for credit card information within Firestore.
- Integrated Fitness & Health Dashboard: A web dashboard for tracking workout sessions by muscle group, recording exercises, logging body progress (weight, BMI, body fat), and monitoring personal records stored in Firestore.
- Personalized Vehicle Management Portal: A web portal to track multiple vehicles, log maintenance records, insurance details, and receive automated alerts for important expirations or services via Firestore.
- Real-time Sports Hub: Displays live scores, game schedules, and team standings for user-configured sports teams (e.g., Charlotte Hornets, Carolina Panthers) by fetching data from the ESPN public API.
- AI Financial Advisor Tool: Leverages generative AI to analyze logged financial data (bills, income, expenses) from Firestore and generate personalized spending habit reports, budget suggestions, and financial health insights displayed within the web interface.

## Style Guidelines:

- Scheme: Dark mode to convey a modern, sophisticated, and functional operating system feel.
- Primary color: A vibrant yet composed deep violet-blue (#6952E0) for key interactive elements and highlights, suggesting innovation and clarity.
- Background color: A subtly textured, very dark background with a hint of purple (#17161D), providing a calm and immersive canvas.
- Accent color: A contrasting yet harmonious medium blue (#5580CC) for secondary calls to action, informational cues, and visual differentiation.
- Headlines font: 'Space Grotesk' (sans-serif) for a modern, slightly technical, and bold visual statement.
- Body text font: 'Inter' (sans-serif) for optimal readability and a neutral, objective aesthetic across all detailed content.
- Utilize minimalist, vector-based system icons that align with a modern OS interface for clear functionality.
- Implement a modular, card-based layout on dashboards to logically group information and ensure clean visual separation.
- Subtle and purposeful micro-animations on state changes and navigation transitions to enhance user feedback without distraction.