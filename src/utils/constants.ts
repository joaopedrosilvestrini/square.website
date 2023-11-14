import { env } from '~/env.mjs'

export const DISCORD_OAUTH_COOKIES_KEY = ''
export const DISCORD_OAUTH2_URL = `https://discord.com/api/oauth2/authorize?client_id=${
  env.NEXT_PUBLIC_DISCORD_CLIENT_ID
}&redirect_uri=${encodeURIComponent(
  env.NEXT_PUBLIC_DISCORD_CALLBACK_URL,
)}&response_type=code&scope=identify%20guilds`
