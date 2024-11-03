import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bhanu Sandeep Reddy - Resume',
  description: 'Professional resume of Bhanu Sandeep Reddy Chirra, Verification and Validation Test Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      {children}
    
  )
}
