import { Inter } from 'next/font/google';
import AuthProvider from '@/context/AuthProvider';
import { ChakraProviders } from '@/context/ChakraProviders';
import ChakraHeader from '@/components/ChakraHeader';
import './globals.css';

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
          <ChakraProviders>
            <ChakraHeader />
            <main>{children}</main>
          </ChakraProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
