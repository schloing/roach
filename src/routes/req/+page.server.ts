import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ parent, params }) => {
    const { session } = await parent();

    if (!session) {
        return redirect(308, "/login");
    }

    return {
        session,
    };
};