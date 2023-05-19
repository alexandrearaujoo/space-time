import { FastifyInstance } from 'fastify'
import MemoryController from '../controller/memories'
import errorHandler from '../middleware/errorHandler'

export async function memoriesRoutes(app: FastifyInstance) {
  app.addHook('onError', async (req, reply, error) => {
    errorHandler(error, req, reply)
  })
  app.addHook('preHandler', async (req) => {
    await req.jwtVerify()
  })
  app.get('/memories', MemoryController.show)
  app.get('/memories/:id', MemoryController.index)
  app.post('/memories', MemoryController.create)
  app.patch('/memories/:id', MemoryController.update)
  app.delete('/memories/:id', MemoryController.delete)
}
