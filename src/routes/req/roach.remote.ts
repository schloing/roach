import { db } from "$/lib/server/db";
import { roaches } from "$/lib/db/schema";
import { roachInsertSchema } from "$/lib/db/validation";
import { getSession } from "$/lib/server/session";
import { eq } from "drizzle-orm";
import { command } from "$app/server";

export const uploadRoach = command(roachInsertSchema, async (roach) => {
    const session = await getSession();

    if (!session?.user) {
        return;
    }

    // TODO: filter username. words, symbols, shit

    // const result = await db.update(users)
        // .set({ name: username })
        // .where(eq(users.id, session.user.id as string));

    // return result.count > 0;
});