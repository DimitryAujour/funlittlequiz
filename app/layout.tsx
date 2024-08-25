import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'A fun quiz about Maryam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}