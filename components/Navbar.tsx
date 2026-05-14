import Link from 'next/link';
const links=['generator','dashboard','projects','pricing','formations'];
export default function Navbar(){return <header className='sticky top-0 z-20 bg-black/30 backdrop-blur border-b border-white/10'><div className='max-w-6xl mx-auto p-4 flex justify-between'><Link href='/' className='font-bold'>SitePilot AI</Link><nav className='flex gap-4 text-sm'>{links.map(l=><Link key={l} href={`/${l}`}>{l}</Link>)}</nav></div></header>}
