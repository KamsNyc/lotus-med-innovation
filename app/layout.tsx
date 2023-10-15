import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyStyle = {
    fontFamily: 'Roboto, sans-serif', // Use Roboto font as the default font
  };

  return (
    <html lang="en">
      <body style={bodyStyle}>
        {children}
      </body>
    </html>
  )
}
