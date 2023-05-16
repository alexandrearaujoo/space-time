import prismaClient from '../../../prisma/prismaClient'

const getMemories = async () => {
  const memories = await prismaClient.memory.findMany({
    orderBy: { createdAt: 'asc' },
  })

  return memories.map((memory) => ({
    id: memory.id,
    coverUrl: memory.coverUrl,
    excerpt: memory.content.substring(0, 115).concat('...'),
  }))
}

export default getMemories
