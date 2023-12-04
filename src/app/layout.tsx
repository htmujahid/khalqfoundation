import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components/partials';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KHALQ Foundation Pakistan',
  description:
    'KHALQ Foundation Pakistan is a non-profit organization that aims to help the needy and poor people of Pakistan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[calc(100vh-375px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
