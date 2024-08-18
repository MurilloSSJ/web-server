"use client"
import { z } from "zod"

export const baseOperatorSchema = z.object({
    task_id: z.string().max(50),
    retries: z.number().int().default(0),
    depends_on_past: z.boolean().default(false),
    wait_for_downstream: z.boolean().default(false),
    max_active_tis_per_dag: z.boolean().optional(),
    task_group: z.boolean().optional()
})