import { z } from 'zod'

export const memorySchema = z.object({
  coverUrl: z.string().url('Invalid URL'),
  content: z.string().min(2, 'Minimum of 2 characters'),
  isPublic: z.coerce.boolean().default(false),
})

export type MemoryRequest = z.infer<typeof memorySchema>
