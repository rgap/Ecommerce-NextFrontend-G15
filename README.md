# ECOMMERCE-NEXT-G15 - Front-End

An e-commerce website developed as a final project for Coderhouse.

## Online Demo

https://ecommerce-next-g15.vercel.app/

## Tools & Frameworks

PENN Stack: Postgres + Express.js + Next.js + Node.js

This repository only contains the Frontend side made in Next.js 15 RC.

The backend: https://github.com/rgap/Ecommerce-NodeBackend-G15

Image repository containing the compressed jpg images, icons and illustrator source files: https://github.com/rgap/Ecommerce-G15-ImageRepository

The website mockup made in react: https://ecommerce-react-mockup-g15.vercel.app/

## Folder Structure

```
src/
├── app/
│   ├── (cart-layout-pages)/
│   │   ├── cart-info/
│   │   │   └── page.js (Client-side)
│   │   ├── cart-payment/
│   │   │   └── page.js (Client-side)
│   │   ├── cart-shipping/
│   │   │   └── page.js (Client-side)
│   │   ├── cart/
│   │   │   └── page.js (Client-side)
│   │   └── layout.js [Cart layout]
│	│
│   ├── (main-layout-pages)/
│   │   ├── (profile-module)/
│   │   │   ├── login/
│   │   │   │   └── page.js (Client-side)
│   │   │   ├── profile/
│   │   │   │   └── page.js (Client-side)
│   │   │   ├── email-verification/
│   │   │   │   └── page.js (Client-side)
│   │   │   ├── reset-password/
│   │   │   │   └── page.js (Client-side)
│   │   │   └── register/
│   │   │       └── page.js (Client-side)
│   │   ├── news/
│   │   │   └── page.js (Client-side)
│   │   ├── products/
│   │   │   ├── [productSlug]/
│   │   │   │   └── page.js (Server-side)
│   │   │   └── page.js (Client-side)
│   │   └── layout.js [Main layout for the application, used across various pages]
│	│
│   ├── globals.css (Global CSS styles for the application)
│   ├── layout.js [General layout]
│   └── not-found.js (Custom 404 page)
│
├── components/
│   ├── BackgroundImageSlider.js  (Client-side)
│   ├── ConfirmationModal.js      (Client-side)
│   ├── EditableField.js          (Client-side)
│   ├── cart/
│   │   ├── Breadcrumb.js          (Client-side)
│   │   ├── CardPaymentForm.js     (Client-side)
│   │   ├── ProductShoppingCart.js (Client-side)
│   │   └── QuantityButton.js      (Client-side)
│   ├── common/
│   │   ├── Button.js             (Client-side)
│   │   ├── Footer.js             (Client-side)
│   │   ├── Header.js             (Client-side)
│   │   ├── Logo.js               (Server-side)
│   │   └── TextField.js          (Client-side)
│   └── products/
│       ├── ProductActions.js     (Client-side)
│       ├── ProductCard.js        (Server-side)
│       ├── ProductImageSlider.js (Client-side)
│       └── RelatedProducts.js    (Server-side)
│
├── mockData/                     # Mock Data for development and testing
├── schemas/                      # Data validation schemas
└── services/                     # Functions for API calls
```

## Main Dependencies

- next: Framework for server-rendered React applications.
- react: JavaScript library for building user interfaces.
- react-dom: Entry point to the React DOM rendering API.
- @mercadopago/sdk-react: MercadoPago's SDK for React, used for integrating payment solutions.
- formik: Library for building forms in React, handling form state, validation, and submission.
- yup: Schema builder for value parsing and validation.
- zustand: State management library for React applications.
- react-toastify: Library for adding notifications to a React app, offering customizable, toast-style notifications.

## Development Dependencies

- eslint: Tool for identifying and reporting on patterns in JavaScript, enforcing code style.
- postcss: Tool for transforming CSS with JavaScript.

## Configuration

### Create The .env.local File

```
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY: This is the public key used to initialize and authenticate requests with the MercadoPago SDK for payment processing.

NEXT_PUBLIC_HOSTNAME_BACKEND: Specifies the base URL of your backend API. This can be a local or production URL, used for making HTTP requests to your server.

NEXT_PUBLIC_API_TOKEN: A static token that is likely used as an authorization bearer token for making authenticated requests to your backend API.

NEXT_PUBLIC_DEBUG_MODE: A boolean flag used to enable or disable debug mode in your application. When true, it might activate additional logging, error reporting, or set default values for testing.

NEXT_PUBLIC_GOOGLE_CLIENT_ID (NOT USED YET): This is the client ID provided by Google for OAuth authentication. It's used to integrate Google's OAuth for user authentication in your application.
```

### Install Dependencies

```
npm install
```

### Run The Server

```
npm run dev --force
```
