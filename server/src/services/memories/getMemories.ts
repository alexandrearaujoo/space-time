import prismaClient from '../../../prisma/prismaClient'
import AppError from '../../error/appError'

const getMemories = async (id: string) => {
  if (!id) throw new AppError(401, 'reser')

  const memories = await prismaClient.memory.findMany({
    where: { userId: id },
    orderBy: { createdAt: 'asc' },
  })

  return memories.map((memory) => ({
    id: memory.id,
    coverUrl: memory.coverUrl,
    excerpt: memory.content.substring(0, 115).concat('...'),
    isPublic: memory.isPublic,
  }))
}

export default getMemories
