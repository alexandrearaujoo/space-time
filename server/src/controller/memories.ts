import { FastifyReply, FastifyRequest } from 'fastify'
import createMemory from '../services/memories/createMemory'
import { createMemorySchema } from '../schemas/createMemory'
import { z } from 'zod'
import getMemoryById from '../services/memories/getMemoryById'
import getMemories from '../services/memories/getMemories'
import { updateMemory } from '../services/memories/updateMemory'

class MemoryController {
  async create(req: FastifyRequest, res: FastifyReply) {
    const { sub: userId } = req.user
    const { coverUrl, content, isPublic } = createMemorySchema.parse(req.body)

    const newMemory = await createMemory({
      coverUrl,
      content,
      isPublic,
      userId,
    })

    return res.status(201).send(newMemory)
  }

  async show(req: FastifyRequest, res: FastifyReply) {
    const { sub } = req.user

    const memories = await getMemories(sub)

    return res.send(memories)
  }

  async index(req: FastifyRequest, res: FastifyReply) {
    const { sub } = req.user
    const params = z.object({
      id: z.string().uuid('Invalid UUID'),
    })

    const { id } = params.parse(req.params)

    const memory = await getMemoryById(id, sub)

    return res.send(memory)
  }

  async update(req: FastifyRequest, res: FastifyReply) {
    const { sub } = req.user
    const params = z.object({
      id: z.string().uuid('Invalid UUID'),
    })
    const { id } = params.parse(req.params)

    const { coverUrl, content, isPublic } = req.body as {
      coverUrl?: string
      content?: string
      isPublic?: boolean
    }

    const memoryUpdated = updateMemory(id, sub, {
      content,
      coverUrl,
      isPublic,
    })

    return res.send(memoryUpdated)
  }

  async delete(req: FastifyRequest, res: FastifyReply) {}
}

export default new MemoryController()
