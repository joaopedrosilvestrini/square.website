import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Servers from '~/app/(models)/Servers'

export async function GET(req: NextRequest) {
  try {
    const servers = await Servers.find()
    console.log(servers)
    return NextResponse.json({ servers }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'ERROR', error }, { status: 500 })
  }
}
