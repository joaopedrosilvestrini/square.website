import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { env } from '~/env.mjs'
import { DISCORD_OAUTH_COOKIES_KEY } from '~/utils/constants'

export async function GET(req: NextRequest) {
  cookies().delete(DISCORD_OAUTH_COOKIES_KEY)

  return NextResponse.redirect(
    new URL(
      '/',
      env.NODE_ENV === 'development'
        ? `http://${req.headers.get('host')}`
        : req.url,
    ),
  )
}
