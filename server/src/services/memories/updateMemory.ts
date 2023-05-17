import prismaClient from '../../../prisma/prismaClient'

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

  if (!memory) throw new Error('Memory not found')

  if (memory.userId !== userId) throw new Error('Unauthorized')

  const memoryUpdated = await prismaClient.memory.update({
    where: { id },
    data: { ...data },
  })

  return memoryUpdated
}
