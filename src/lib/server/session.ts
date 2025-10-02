import { query, getRequestEvent } from "$app/server";

// remote function to get auth session
export const getSession = query(async () => {
    const { locals } = getRequestEvent();
    return await locals.auth();
});