import 'dotenv/config'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { app } from './app'

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: process.env.JWT_SECRET as string,
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running'))
