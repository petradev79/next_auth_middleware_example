import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/context/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next app',
  description: 'Authentication with next-auth and middleware example',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <main className='container'>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
