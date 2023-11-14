import { ServerStructure } from '~/types'

const apiServer = {
  getAllServer: async (): Promise<ServerStructure[]> => {
    const res = await fetch('https://squarelist.vercel.app/api/servers')
    const data = await res.json()

    return data.servers
  },
}

export default apiServer
