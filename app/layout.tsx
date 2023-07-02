import './globals.scss'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NEXT JS 활용한 프로젝트',
  description: 'NEXT JS 활용한 프로젝트 공부',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header>
          <h1><Link href='/'>로고(홈)</Link></h1>
          <nav>
            <ul>
              <li><Link href='/list'>리스트</Link></li>
              <li><Link href='/cart'>장바구니</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
