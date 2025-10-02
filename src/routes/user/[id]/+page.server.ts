import { users } from "$/lib/db/schema";
import { db } from "$/lib/server/db";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent, params }) => {
    const { session } = await parent();
    let queryUser = null;

    if (params.id !== session?.id) {
        const [user] = await db.select().from(users).where(eq(users.id, params.id)).limit(1);
        queryUser = user;
        queryUser.email = "";
        queryUser.emailVerified = null;
    }

    return {
        session,
        queryUser
    };
};