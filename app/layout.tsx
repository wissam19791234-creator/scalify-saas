import type { ReactNode } from 'react';
import { DM_Sans, Syne } from 'next/font/google';
import '@/styles/globals.css';
const dm = DM_Sans({ subsets:['latin'], variable:'--font-dm' });
const syne = Syne({ subsets:['latin'], variable:'--font-syne' });
export default function RootLayout({children}:{children:ReactNode}){return <html lang='fr' className={`${dm.variable} ${syne.variable}`}><body className='ambient bg-grid'>{children}</body></html>}
