import Header from '@/components/Header'
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import './globals.css';
import Providers from './Providers';

export const metadata = {
  title: 'IMDb Clone',
  description: 'IMDb CLONE Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Providers>
          {/* Header */}
          <Header />


          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}
          <SearchBox />

          {children}
        </Providers>
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
