import prismaClient from '../../../prisma/prismaClient'

const getMemoryById = async (id: string, userId: string) => {
  const memory = await prismaClient.memory.findUniqueOrThrow({ where: { id } })

  if (!memory.isPublic && memory.userId !== userId)
    throw new Error('Unathourized')

  return memory
}

export default getMemoryById
