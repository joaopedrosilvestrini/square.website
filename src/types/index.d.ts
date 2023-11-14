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

export interface UserStructure {
  _id: string
  username: string
  avatar: string
}

export interface NavbarProps {
  trigger: React.ReactNode
}
