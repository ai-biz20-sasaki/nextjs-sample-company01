import './globals.css'
import { Inter, Noto_Sans_JP } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
//const noto = Noto_Sans_JP({ weight: ['400'], subsets: ['latin'] });
const noto = Noto_Sans_JP({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-noto' });

export const metadata = {
  title: '(株)サンプルカンパニー01',
  description: 'サンプル会社01のサイトです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${noto.className}`}>{children}</body>
    </html>
  )
}
