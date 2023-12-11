import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Generix-Shipping',
  description: 'Generix Shipping: Seamlessly export goods worldwide by sea, land, and air, with efficient logistics to 100+ countries.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        </body>
    </html>
  )
}
