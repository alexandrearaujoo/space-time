import { ZodError } from 'zod'
import AppError from '../error/appError'
import { FastifyReply, FastifyRequest } from 'fastify'

export default function (error: any, req: FastifyRequest, reply: FastifyReply) {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      message: error.message,
    })
  }

  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: error.issues.map(({ message }) => message),
    })
  }

  console.log(error)

  return reply
    .status(500)
    .send({ message: 'Internal server error. Try again', error })
}
