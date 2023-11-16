// Applies next-auth middleware to all pages in the app
export { default } from "next-auth/middleware";

// Applies next-auth middleware to specific pages in the app
export const config = { matcher: ["/dashboard"] };
