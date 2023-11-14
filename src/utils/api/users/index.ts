import { APIUser } from 'discord-api-types/v10'
import { env } from '~/env.mjs'
import api from '..'
import Users from '~/app/(models)/Users'

const apiUser = {
  getLogginUser: async () => {
    const token = await api.getLoggin()
    const userData = await fetch('https://discord.com/api/v10/users/@me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 3_600 },
    })

    const data = await userData.json()
    await Users.findOneAndUpdate(
      { _id: data.id },
      { username: data.username, avatar: data.avatar, _id: data.id },
      { new: true, upsert: true },
    )

    return data as APIUser
  },
  fetchUser: async (userId: string) => {
    const result = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        Authorization: `Bot ${env.DISCORD_BOT_TOKEN}`,
      },
      next: { revalidate: 3_600 },
    })

    return (await result.json()) as APIUser
  },
}

export default apiUser
