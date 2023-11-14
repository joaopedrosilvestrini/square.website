import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const mont = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Square ServerList',
  description: 'Lista de servidores | Engajamento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mont.className}>{children}</body>
    </html>
  )
}
