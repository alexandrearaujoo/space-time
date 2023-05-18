import { api } from '@/lib/api'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  const { data: token } = await api.post('/register', { code })

  const redirectUrl = new URL('/', req.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `tokenTimeline=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
