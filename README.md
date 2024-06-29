# ECOMMERCE-NEXT-G15 - Front-End

An e-commerce website developed as a final project for Coderhouse.

## Online Demo

https://ecommerce-next-g15.vercel.app/

## Tools & Frameworks

PENN Stack: Postgres + Express.js + Next.js + Node.js

This repository only contains the Frontend side made in Next.js.

The backend: https://github.com/rgap/Ecommerce-NodeBackend-G15

Image repository containing the compressed jpg images, icons and illustrator source files: https://github.com/rgap/Ecommerce-G15-ImageRepository

The website mockup made in react: https://ecommerce-react-mockup-g15.vercel.app/

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

### Install Dependencies

```
npm install
```

### Create The .env File

```
NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY: This is the public key used to initialize and authenticate requests with the MercadoPago SDK for payment processing.

NEXT_PUBLIC_HOSTNAME_BACKEND: Specifies the base URL of your backend API. This can be a local or production URL, used for making HTTP requests to your server.

NEXT_PUBLIC_API_TOKEN: A static token that is likely used as an authorization bearer token for making authenticated requests to your backend API.

NEXT_PUBLIC_DEBUG_MODE: A boolean flag used to enable or disable debug mode in your application. When true, it might activate additional logging, error reporting, or set default values for testing.

NEXT_PUBLIC_GOOGLE_CLIENT_ID (NOT USED YET): This is the client ID provided by Google for OAuth authentication. It's used to integrate Google's OAuth for user authentication in your application.

```

### Run The Server

```
npm run dev
```

## Some Screenshots

These are the mid-fidelity wireframes made in Figma:

<p align="center">
  <img src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/presentation/wireframes-overview.jpg">
</p>
