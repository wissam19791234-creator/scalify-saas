import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function RootLayout({children}:{children:ReactNode}){return <html lang='fr'><body><Navbar/><main className='max-w-6xl mx-auto p-6'>{children}</main><Footer/></body></html>}
