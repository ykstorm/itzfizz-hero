import '../styles/globals.css'

export const metadata = {
  title: 'Itzfizz Digital',
  description: 'Scroll-driven hero section animation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
