import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Servers from '~/app/(models)/Servers'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    await Servers.create(body)

    return NextResponse.json({ message: 'SUCESS' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'ERROR', error }, { status: 500 })
  }
}
