import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { createUser } from '../services/auth/createUser'

class AuthController {
  async create(req: FastifyRequest, res: FastifyReply) {
    const bodySchema = z.object({
      code: z.string(),
    })
    const { code } = bodySchema.parse(req.body)

    const user = await createUser(code)

    res.status(201).send(user)
  }
}

export default new AuthController()
