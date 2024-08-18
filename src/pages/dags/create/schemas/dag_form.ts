"use client"
import { z } from "zod"

export const dagFormSchema = z.object({
  dag_name: z.string().min(3).max(50),
})