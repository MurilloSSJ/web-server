"use client"
import { z } from "zod"
import { baseOperatorSchema } from "./base_operator"
export const sqlOperatorSchema = z.object({
    ...baseOperatorSchema.shape,
    sql: z.string(),
    autocommit: z.boolean().default(false),
    parameters: z.string().optional(),
    handler: z.string().default("fetch_all_handler"),
    conn_id: z.string().optional(),
    database: z.string().optional()
})