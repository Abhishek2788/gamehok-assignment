import './globals.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'

export const metadata = {
  title: 'Gamehok',
  description: 'Game tournaments platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-with-header">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}
