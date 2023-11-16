# Simple Next.js Authentication using Next-Auth

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 12 or later)
- A package manager like npm or yarn
- Git (for version control)

## 🌟 Introduction

This project demonstrates a simple authentication setup in a Next.js 14.0.2 application using "next-auth" version 4.24.5. It showcases how to configure authentication with GitHub and custom credentials.

## 🔧 Setup

1. Clone the Repository:

```bash
git clone git@github.com:MathiasCK/next-auth-demo.git
cd next-auth-demo
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Environment Variables:

To enable GitHub authentication, consult [this toturial](https://next-auth.js.org/providers/github) for guidance. Once you've obtained your GitHub credentials, create a .env.local file in the project's root directory and include your GitHub ID and Secret:

```bash
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

4. Run the Development server:

```bash
npm run dev
# or
yarn dev
```

## 🚀 Usage

- **Home Page**: Accessible to all. Redirects unauthenticated users with a message.
- **Server Page**: Requires authentication. Redirects to the sign-in page if not authenticated.
- **Client Page**: Uses client-side authentication with useSession.
- **Dashboard**: Protected by middleware, only accessible when authenticated.

## 📁 Folder Structure

`/src/app/api/auth/[...nextauth]`: Contains `route.ts` and `options.ts` for authentication configuration.

- `route.ts`: Handles authentication routes.
- `options.ts`: Configures providers for GitHub and Credentials authentication.

`/src/`: Includes middleware for route protection and pages.

- `middleware.ts`: Protects specific routes like /dashboard.

## License 📄

Distributed under the MIT License. See LICENSE for more information.

## Acknowledgements 🎉

- [Next.js](https://nextjs.org/docs) - A big shoutout to the Next.js framework for providing a robust and efficient foundation for building modern web applications. Its server-side rendering and static generation capabilities greatly enhanced the performance and scalability of the project.
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction) - Immense gratitude to NextAuth.js for its seamless authentication solution. Its simplicity and flexibility in integrating with different providers, including GitHub, made setting up secure authentication in the Next.js application a breeze.

Made with ❤️ and JavaScript.
