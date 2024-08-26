"use client"
import { scheduler } from "timers/promises"
import { z } from "zod"

export const dagFormSchema = z.object({
  dag_name: z.string().min(3).max(50),
  scheduler_interval: z.string().min(3).max(50),
  start_date: z.date().optional(),
  end_date: z.date().optional(),
})