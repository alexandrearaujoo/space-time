import { FastifyInstance } from 'fastify'
import MemoryController from '../controller/memories'

export async function memoriesRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (req) => {
    await req.jwtVerify()
  })
  app.get('/memories', MemoryController.show)
  app.get('/memories/:id', MemoryController.index)
  app.post('/memories', MemoryController.create)
  app.patch('/memories/:id', MemoryController.update)
  app.delete('/memories/:id', MemoryController.delete)
}
