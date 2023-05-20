import prismaClient from '../../../prisma/prismaClient'
import AppError from '../../error/appError'

export const getMemoryById = async (id: string) => {
  const memory = await prismaClient.memory.findUnique({ where: { id } })

  if (!memory) throw new AppError(404, 'Memory not found')

  if (!memory.isPublic) throw new AppError(401, 'Memory is private')

  return memory
}
