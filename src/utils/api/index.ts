import { APIGuild } from 'discord-api-types/v10'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { env } from '~/env.mjs'
import {
  DISCORD_OAUTH2_URL,
  DISCORD_OAUTH_COOKIES_KEY,
} from '~/utils/constants'

const api = {
  getCurrentToken: async () => {
    const cookieStore = cookies()
    const token = cookieStore.get(DISCORD_OAUTH_COOKIES_KEY)

    if (!token) redirect(DISCORD_OAUTH2_URL)
    return token.value
  },
  getLoggin: async () => {
    const cookieStore = cookies()
    const token = cookieStore.get(DISCORD_OAUTH_COOKIES_KEY)
    return token?.value
  },
  fetchServer: async (guildId: string) => {
    const result = await fetch(
      `https://discord.com/api/v10/guilds/${guildId}`,
      {
        headers: {
          Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
        },
        next: { revalidate: 3_600 },
      },
    )

    return (await result.json()) as APIGuild
  },
}

export default api
