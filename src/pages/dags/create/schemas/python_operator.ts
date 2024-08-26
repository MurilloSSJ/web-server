"use client"
import { z } from "zod"
import { baseOperatorSchema } from "./base_operator"
export const pythonOperatorSchema = z.object({
    ...baseOperatorSchema.shape,
    python_callable: z.string(),
    function: z.string(),
})