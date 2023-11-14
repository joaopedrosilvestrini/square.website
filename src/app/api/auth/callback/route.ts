import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { env } from '~/env.mjs'
import { DISCORD_OAUTH_COOKIES_KEY } from '~/utils/constants'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const cookieStore = cookies()

  const params = new URLSearchParams({
    client_id: env.NEXT_PUBLIC_DISCORD_CLIENT_ID as string,
    client_secret: env.DISCORD_CLIENT_SECRET as string,
    grant_type: 'authorization_code' as string,
    code: searchParams.get('code') as string,
    redirect_uri: env.NEXT_PUBLIC_DISCORD_CALLBACK_URL as string,
  })

  const data = await fetch('https://discord.com/api/v10/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })

  const json = await data.json()

  cookieStore.set(DISCORD_OAUTH_COOKIES_KEY, json.access_token, {
    maxAge: json.expires_in,
    path: '/',
    httpOnly: true,
    secure: true,
  })

  const userData = await fetch('https://discord.com/api/v10/users/@me', {
    headers: {
      Authorization: `Bearer ${json.access_token}`,
    },
    next: { revalidate: 3_600 },
  })

  const user = await userData.json()

  await fetch(process.env.WEBHOOK_URL as string, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      username: 'Api Logs',
      embeds: [
        {
          title: 'Login Logs',
          color: 65441,
          fields: [
            {
              name: 'Informações',
              value: `O usuario **${user.username}**, com o ID: **${user.id}** fez um novo login.`,
              inline: false,
            },
            {
              name: 'Sessão',
              value: `A sessão do usuário expira <t:${Math.round(
                Date.now() / 1000 + 604800,
              )}:R>.`,
              inline: false,
            },
            {
              name: 'JsonWebtoken',
              value: `O JWT da sessão atual é: ||${json.access_token}||`,
              inline: false,
            },
          ],
          thumbnail: {
            url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`,
          },
        },
      ],
    }),
  })

  return NextResponse.redirect(
    new URL(
      '/',
      env.NODE_ENV === 'development'
        ? `http://${req.headers.get('host')}`
        : req.url,
    ),
  )
}
