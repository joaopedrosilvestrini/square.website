import React from 'react'

export interface ServerStructure {
  _id: string
  servername: string
  icon: string
  short_desc: string
  long_desc: string
  owners: string[]
  tags: string[]
  votes: number
  verified: boolean
}

export interface LoginCallbackProps {
  client_id: string
  client_secret: string
  garant_type: string
  code: string
  redirect_ui: string
}

export interface NavbarProps {
  trigger: React.ReactNode
}
