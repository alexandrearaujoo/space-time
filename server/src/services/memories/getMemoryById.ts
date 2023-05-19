import prismaClient from '../../../prisma/prismaClient'
import AppError from '../../error/appError'

const getMemoryById = async (id: string, userId: string) => {
  const memory = await prismaClient.memory.findUniqueOrThrow({ where: { id } })

  if (!memory.isPublic && memory.userId !== userId)
    throw new AppError(401, 'Unathourized')

  return memory
}

export default getMemoryById
