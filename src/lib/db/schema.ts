import {
    timestamp,
    pgTable,
    text,
    integer,
    primaryKey,
    numeric,
    pgEnum,
} from "drizzle-orm/pg-core"
import type { AdapterAccountType } from "@auth/core/adapters";
import { sql } from "drizzle-orm";

export const billingTypeEnum = pgEnum("billing_type", ["one_time", "recurring"]);
export const roachTypeEnum = pgEnum("roach_type", ["calm", "angry", "chaotic"]);

export const users = pgTable("user", {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    imageURL: text("image"),
    flair: text("flair").default("cockroach"),
});

export const roaches = pgTable("roach", {
    id: text("id").notNull().primaryKey(),
    ownerId: text("ownerId").notNull().references(() => users.id, { onDelete: "cascade" }),
    acceptedWorkerId: text("acceptedWorkerId").references(() => users.id, { onDelete: "set null" }),
    title: text("title").notNull(),
    views: integer("views").default(0),
    price: numeric("price", { mode: "number" }).default(0),
    billingType: billingTypeEnum("billingType").notNull().default("one_time"),
    roachType: roachTypeEnum("roachType").notNull().default("calm"),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow().$onUpdate(() => sql`now()`),
    deadline: timestamp("deadline", { mode: "date" }),
    tags: text("tags").array(),
});

export const accounts = pgTable(
    "account",
    {
        userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => [
        primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    ],
);

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").notNull().primaryKey(),
    userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
});