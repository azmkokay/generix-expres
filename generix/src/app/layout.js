import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Generix Export',
  description: 'Explore the power of Generix Export, a cutting-edge solution for seamless data export to a global audience. Effortlessly share and distribute your data worldwide with Generix.',
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
