import prismaClient from '../../../prisma/prismaClient'

const getMemories = async (id: string) => {
  const memories = await prismaClient.memory.findMany({
    where: { userId: id },
    orderBy: { createdAt: 'asc' },
  })

  return memories.map((memory) => ({
    id: memory.id,
    coverUrl: memory.coverUrl,
    excerpt: memory.content.substring(0, 115).concat('...'),
  }))
}

export default getMemories
