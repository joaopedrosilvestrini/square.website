import { PropsWithChildren } from 'react'
import Navbar from '~/components/navbar'

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="min-h-[67vh]">{children}</main>
    </>
  )
}
