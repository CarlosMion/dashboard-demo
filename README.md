# Next.js Application Documentation

This document provides an overview of the Next.js application, the technologies used, and a quick guide to setting up and running the application.

---

## 📚 Technologies Used

### 1. Next.js
- **Why**:
  - Server-side rendering (SSR) and static site generation (SSG) for improved performance and SEO.
  - Automatic code splitting and routing for efficient application performance.
  - Built-in support for API routes, making it a full-stack framework.

### 2. MUI (Material-UI)
- **Why**:
  - Provides a rich set of pre-designed, customizable UI components.
  - Ensures design consistency and responsiveness across devices.
  - Easy integration with styled-components and theming.

### 3. Styled-Components
- **Why**:
  - Enables writing CSS directly in JavaScript with scoped styles for each component.
  - Provides dynamic styling based on props or themes.
  - Ensures maintainability by co-locating styles with components.

### 4. i18n-next
- **Why**:
  - Simplifies internationalization (i18n) for multilingual support.
  - Provides powerful features like lazy loading translations and language detection.
  - Seamless integration with Next.js for SSR/SSG.

### 5. json-server
- **Why**:
  - Acts as a quick and lightweight mock API server for development.
  - Simulates RESTful APIs, making it easier to test and develop features without a backend.

### 6. Context API
- **Why**:
  - Built-in React solution for state management.
  - Lightweight and easy to use for managing global state across the application.

### 7. Day.js
- **Why**:
  - A minimalist and fast library for date manipulation.
  - Provides an intuitive API for formatting and handling dates.

### 8. react-hook-form
- **Why**:
  - Simplifies form management with minimal re-renders.
  - Offers built-in validation and supports integration with other libraries like `yup` for schema validation.

### 9. Swiper
- **Why**:
  - Feature-rich carousel library with responsive and touch-friendly support.
  - Ideal for creating modern, mobile-friendly sliders.

### 10. Recharts
- **Why**:
  - A declarative library for building simple and customizable charts.
  - Uses React components to create visually appealing data visualizations.

### 11. React-Toastify
- **Why**:
  - Simple and customizable library for showing toast notifications.
  - Easy to use with global or component-level integration.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: Ensure you have Node.js (version 16 or later) installed.
- **Yarn**: Use Yarn as the package manager.



## Install Dependencies

- `yarn install`

## Setup .env File

- Create a .env file in the root directory and add the following:

`NEXT_PUBLIC_WEBAPP_API_URL=http://localhost:3001`

## Start the Application

This project uses concurrently to run both the Next.js app and the json-server.

Start the app:

`yarn dev`

	•	The Next.js app will run on `http://localhost:3000`.
	•	The json-server will mock APIs on `http://localhost:3001`.

## Access the Application
	•	Visit `http://localhost:3000`to use the app.
	•	Test API endpoints at `http://localhost:3001`.


## Example

   - go to: `https://dashboard-demo-olive.vercel.app/en`

## Internationalization

  • /pt - brazilian portuguese translations
  • /en - english US

## 🛠 Folder Structure

/components        - Reusable UI components divided based on the atomic-design principle
/app               - Next.js pages (routing)
/constants         - Global constants
/fonts             - Font configuration
/api               - API-related files
/layout            - Layout application files
/providers         - Context for the application
/theme             - MUI Theme configuration
/types             - Interfaces
/utils             - Utilities for the app

## 💡 Additional Notes
	•	Code Quality: Linting and formatting are set up with ESLint and Prettier.
	•	Deployment: This app is optimized for deployment to platforms like Vercel.
	•	Custom Themes: MUI theming allows for design customization to match branding needs.
