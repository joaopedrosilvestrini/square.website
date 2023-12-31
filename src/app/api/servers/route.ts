import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Servers from '~/app/(models)/Servers'

export async function GET() {
  try {
    const servers = await Servers.find()
    return NextResponse.json({ servers }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'ERROR', error }, { status: 500 })
  }
}
