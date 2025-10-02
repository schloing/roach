import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { roaches, users } from "$/lib/db/schema";
import z from "zod";

export const userSelectSchema = createSelectSchema(users);

export const roachSelectSchema = createSelectSchema(roaches);
export const roachInsertSchema = createInsertSchema(roaches);