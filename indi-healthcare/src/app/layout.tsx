import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IndiHealthcare - World-Class Healthcare at a Fraction of the Cost',
  description: 'Discover affordable, high-quality medical treatments in India. Save up to 80% on surgeries and procedures while receiving care at JCI-accredited hospitals.',
  keywords: 'medical tourism, healthcare in India, affordable surgery, international healthcare, medical treatment abroad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
