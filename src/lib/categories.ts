export interface RoachTag {
    id: string;
    name: string;
    description: string;
    type: "urgency" | "duration" | "other";
    payout_type?: "hourly" | "one-time" | "mixed";
    sort_priority?: number;
}

export const roach_tags: RoachTag[] = [
    {
        id: "calm",
        name: "calm",
        description: "low urgency",
        type: "urgency",
    },
    {
        id: "urgent",
        name: "urgent",
        description: "high urgency",
        type: "urgency",
        sort_priority: 1,
    },
    {
        id: "long_term",
        name: "long term",
        description: "tasks expected to take a long time to complete",
        type: "duration",
    },
];