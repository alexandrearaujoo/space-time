import axios from 'axios'
import { userSchema } from '../../schemas/userSchema'
import prismaClient from '../../../prisma/prismaClient'
import { app } from '../../server'

export const createUser = async (code: string) => {
  const { data } = await axios.post(
    'https://github.com/login/oauth/access_token',
    null,
    {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    },
  )

  const { access_token: accessToken } = data

  const { data: userResponse } = await axios.get(
    'https://api.github.com/user',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  const userInfo = userSchema.parse(userResponse)

  const userExists = await prismaClient.user.findUnique({
    where: { githubId: userInfo.id },
  })

  if (userExists) throw new Error('User already exists!')

  const user = await prismaClient.user.create({
    data: {
      githubId: userInfo.id,
      name: userInfo.name,
      avatarUrl: userInfo.avatar_url,
      login: userInfo.login,
    },
  })

  const token = app.jwt.sign(
    { name: user.name, avatarUrl: user.avatarUrl },
    {
      sub: user.id,
      expiresIn: '30 days',
    },
  )

  return token
}
