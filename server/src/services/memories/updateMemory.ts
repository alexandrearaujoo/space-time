import prismaClient from '../../../prisma/prismaClient'
import AppError from '../../error/appError'

interface UpdateMemoryRequest {
  coverUrl?: string
  content?: string
  isPublic?: boolean
}

export const updateMemory = async (
  id: string,
  userId: string,
  data: UpdateMemoryRequest,
) => {
  const memory = await prismaClient.memory.findUniqueOrThrow({ where: { id } })

  if (!memory) throw new AppError(404, 'Memory not found')

  if (memory.userId !== userId) throw new AppError(401, 'Unauthorized')

  const memoryUpdated = await prismaClient.memory.update({
    where: { id },
    data: { ...data },
  })

  return memoryUpdated
}
