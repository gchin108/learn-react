import './globals.css'
import { Inter } from 'next/font/google'
import LeftBar from '@/components/LeftBar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn React',
  description: 'Learn React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LeftBar />
        {children}
      </body>
    </html>
  );
}
