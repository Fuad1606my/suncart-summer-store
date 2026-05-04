import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { Pool } from "pg";

const isProduction = process.env.NODE_ENV === "production";
const appUrl = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

if (isProduction && !process.env.BETTER_AUTH_SECRET) {
  throw new Error("Missing BETTER_AUTH_SECRET. Add it to your deployment environment variables.");
}

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL. Add a PostgreSQL connection string in .env.local.");
}

const googleProviders = process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
  ? {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        prompt: "select_account"
      }
    }
  : {};

export const auth = betterAuth({
  appName: "SunCart",
  baseURL: appUrl,
  secret: process.env.BETTER_AUTH_SECRET || "suncart-dev-secret-change-before-deploy-12345",
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isProduction ? { rejectUnauthorized: false } : undefined
  }),
  trustedOrigins: [appUrl, "http://localhost:3000", "http://127.0.0.1:3000"],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 8
  },
  socialProviders: googleProviders,
  plugins: [nextCookies()]
});
