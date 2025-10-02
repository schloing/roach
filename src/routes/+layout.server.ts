import type { User } from "$/lib/user";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    const session = await event.locals.auth();

    return {
        session: session?.user as User,
    };
};