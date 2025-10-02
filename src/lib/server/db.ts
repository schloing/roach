import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "$env/dynamic/private";

const pool = postgres(env.AUTH_DRIZZLE_URL, { max: 1 });

export const db = drizzle(pool);