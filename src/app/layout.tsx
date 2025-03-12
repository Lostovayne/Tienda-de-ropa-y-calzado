import { Provider } from '@/components';
import { inter } from '@/config/fonts';
import { cn } from '@/lib/twMerge';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Tesla Shop | Ropa y Accesorios Oficiales',
    default: 'Tesla Shop | Ropa y Accesorios Oficiales de Tesla',
  },
  description:
    'Descubre la colección oficial de ropa y accesorios de Tesla. Moda sostenible y de alta calidad inspirada en la innovación y el diseño de Tesla.',
  keywords: ['Tesla', 'ropa', 'accesorios', 'moda sostenible', 'innovación', 'diseño', 'tienda oficial'],
  authors: [{ name: 'Tesla, Inc.' }],
  creator: 'Tesla, Inc.',
  publisher: 'Tesla Shop',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body
        className={cn(
          'bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]',
          inter.className
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
