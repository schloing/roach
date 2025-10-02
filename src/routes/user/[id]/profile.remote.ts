import { db } from "$/lib/server/db";
import { users } from "$/lib/db/schema";
import { getSession } from "$/lib/server/session";
import { eq } from "drizzle-orm";
import { command } from "$app/server";
import z from "zod";
import { userSelectSchema } from "$/lib/db/validation";

async function isValidImageUrl(url: string) {
    try {
        new URL(url);

        const response = await fetch(url, { method: "HEAD" });
        if (!response.ok) return false;

        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.startsWith("image/")) return false;

        return true;
    } catch (err) {
        return false;
    }
}

export const setProfilePicture = command(z.string(), async (url) => {
    const session = await getSession();

    if (!session?.user) {
        return;
    }

    if (!await isValidImageUrl(url)) {
        return;
    }

    const result = await db.update(users)
        .set({ imageURL: url })
        .where(eq(users.id, session.user.id as string));

    return result.count > 0;
});

export const setUsername = command(z.string(), async (username) => {
    const session = await getSession();

    if (!session?.user) {
        return;
    }

    // TODO: filter username. words, symbols, shit

    if (username.length > 17) {
        return;
    }

    const result = await db.update(users)
        .set({ name: username })
        .where(eq(users.id, session.user.id as string));

    return result.count > 0;
});