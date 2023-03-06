import Header from '@/components/Header'
import './globals.css';

export const metadata = {
  title: 'IMDb Clone',
  description: 'IMDb CLONE Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}


// I will add all needed compoenents here (for example header, navbar, search box)

// 1. Clean this file
//    - inside the body section I will add 3 compoents
//    1. HEADER
//    2. NAVBAR
//    3. SEARCHBOX
