"use client"
import { z } from "zod"
import { baseOperatorSchema } from "./base_operator"

export const bashOperatorSchema = z.object({
    ...baseOperatorSchema.shape,
    bash_command: z.string().max(2000),
})