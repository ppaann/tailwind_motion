import type { Metadata } from 'next';
import './globals.css';
import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created with the help of Frontend Tribe',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={twMerge(
          'text-white bg-gray-900 antialiased font-sans',
          inter.variable,
          calistoga.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
