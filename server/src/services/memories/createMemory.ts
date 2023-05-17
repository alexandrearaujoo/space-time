import prismaClient from '../../../prisma/prismaClient'

interface CreateMemoryRequest {
  coverUrl: string
  content: string
  isPublic: boolean
  userId: string
}

const createMemory = async (data: CreateMemoryRequest) => {
  const memory = await prismaClient.memory.create({
    data: { ...data },
  })

  return memory
}

export default createMemory
