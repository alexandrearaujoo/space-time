import prismaClient from '../../../prisma/prismaClient'

interface CreateMemoryRequest {
  coverUrl: string
  content: string
  isPublic: boolean
}

const createMemory = async (data: CreateMemoryRequest) => {
  const memory = await prismaClient.memory.create({
    data: { ...data, userId: 'teste' },
  })

  return memory
}

export default createMemory
