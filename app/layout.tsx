import { Navbar } from '@/components/navbar';
import { Metadata } from 'next';
import { Toaster } from 'sonner';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://ai-sdk-preview-internal-knowledge-base.vercel.app'
  ),
  title: 'Internal Knowledge Base',
  description:
    'Internal Knowledge Base using Retrieval Augmented Generation and Middleware',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster position="top-center" />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
