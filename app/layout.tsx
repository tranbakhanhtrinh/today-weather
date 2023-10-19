import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Today's weather",
  description: "Today's weather"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`overflow-auto md:overflow-hidden lg:h-[100vh] sm:h-auto ${inter.className}`}
      >
        {children}
      </body>
    </html>
  )
}
