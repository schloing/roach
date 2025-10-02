import Discord from "@auth/sveltekit/providers/discord";
import Google from "@auth/sveltekit/providers/google";

export const providers = [
    { name: "Google", id: "google", handler: Google({}) },
    { name: "Discord", id: "discord", handler: Discord({}) }
];