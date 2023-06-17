import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata = {
  title: 'Danone | Hackathon',
  description: 'Descubre los mejores productos ecológicos que solo te ofrece Danone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
