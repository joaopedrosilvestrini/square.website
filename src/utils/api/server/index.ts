import { ServerStructure } from '~/types'

const apiServer = {
  getAllServer: async (): Promise<ServerStructure[]> => {
    const res = await fetch('http://localhost:3000/api/servers')
    const data = await res.json()

    console.log(data)

    return data.servers
  },
}

export default apiServer
