import { FastifyReply, FastifyRequest } from 'fastify'
import createMemory from '../services/memories/createMemory'
import { createMemorySchema } from '../schemas/createMemory'
import { z } from 'zod'
import getMemoryById from '../services/memories/getMemoryById'
import getMemories from '../services/memories/getMemories'

class MemoryController {
  async create(req: FastifyRequest, res: FastifyReply) {
    const { coverUrl, content, isPublic } = createMemorySchema.parse(req.body)

    const newMemory = await createMemory({ coverUrl, content, isPublic })

    return res.status(201).send(newMemory)
  }

  async show(req: FastifyRequest, res: FastifyReply) {
    const memories = await getMemories()

    return res.send(memories)
  }

  async index(req: FastifyRequest, res: FastifyReply) {
    const params = z.object({
      id: z.string().uuid('Invalid UUID'),
    })

    const { id } = params.parse(req.params)

    const memory = await getMemoryById(id)

    return res.send(memory)
  }

  async update(req: FastifyRequest, res: FastifyReply) {}

  async delete(req: FastifyRequest, res: FastifyReply) {}
}

export default new MemoryController()
