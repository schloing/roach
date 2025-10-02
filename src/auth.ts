import { SvelteKitAuth } from "@auth/sveltekit";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { providers } from "$/lib/auth_providers";
import { db } from "$/lib/server/db";
import { users, accounts, sessions } from "$/lib/db/schema";
import { eq } from "drizzle-orm";

export const { handle } = SvelteKitAuth({
    providers: providers.map((obj) => obj.handler),
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
    }),
    pages: {
        error: "/error",
    },
    session: {
        strategy: "database"
    },
    callbacks: {
        async session({ session, user }) {
            const [dbUser] = await db.select().from(users).where(eq(users.id, user.id)).limit(1);
            session.user = dbUser;
            return session;
        },
    },
});