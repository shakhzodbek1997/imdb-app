import './globals.css'

export const metadata = {
  title: 'IMDb Clone',
  description: 'IMDb CLONE Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
