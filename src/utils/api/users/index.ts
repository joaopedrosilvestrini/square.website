import { APIUser } from 'discord-api-types/v10'
import { redirect } from 'next/navigation'
import { env } from '~/env.mjs'
import api from '..'

const apiUser = {
  getLogginUser: async () => {
    const token = await api.getLoggin()
    const userData = await fetch('https://discord.com/api/v10/users/@me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 3_600 },
    })

    return (await userData.json()) as APIUser
  },
  fetchUser: async (userId: string) => {
    const result = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
      },
      next: { revalidate: 3_600 },
    })

    if (result.status !== 200) {
      redirect('/api/auth/logout')
    }

    return (await result.json()) as APIUser
  },
}

export default apiUser
