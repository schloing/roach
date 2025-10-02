import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/lib/server/schema.ts",
    out: "./drizzle/migrations/prod",
    dbCredentials: {
        url: process.env.AUTH_DRIZZLE_URL_PROD as string,
    },
});