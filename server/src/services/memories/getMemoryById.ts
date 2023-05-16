import prismaClient from '../../../prisma/prismaClient'

const getMemoryById = async (id: string) => {
  const memory = await prismaClient.memory.findUniqueOrThrow({ where: { id } })

  return memory
}

export default getMemoryById
