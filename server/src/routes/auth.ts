import { FastifyInstance } from 'fastify'
import AuthController from '../controller/auth'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', AuthController.create)
}
