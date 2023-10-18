import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'flexibble',
  description: 'Showcase and Discover remarkable developer projects - JavaScript Mastery Dibble Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        {/* Navbar Section */}
        <Navbar />
        <br />
        Main - Hero Section
        <main>
          {children}
        </main>
        {/* Footer Section */}
        <Footer />
      </body>
    </html>
  )
}
