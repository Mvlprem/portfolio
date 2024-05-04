import './globals.css'
import localFont from 'next/font/local'

// Metadata
export const metadata = {
  title: 'Mvlprem',
  description: 'My personal website and portfolio.',
  icons: {
    icon: '/icon.svg',
  },
}

// Fonts
const Helvetica = localFont({
  src: '../../public/fonts/Helvetica.ttf',
  variable: '--font-Helvetica',
})

const MaisonNeueWEBMono = localFont({
  src: '../../public/fonts/MaisonNeueWEB-Mono.woff2',
  variable: '--font-MaisonNeueWEBMono',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${Helvetica.variable} ${MaisonNeueWEBMono.variable}`}
    >
      <body className='min-h-screen bg-white bg-dot-black/[0.2]'>
        {children}
      </body>
    </html>
  )
}
