import type { ReactNode } from 'react';
import Link from 'next/link';
export const Card = ({children}:{children:ReactNode}) => <div className='glass rounded-2xl p-5'>{children}</div>;
export const Button = ({children,href}:{children:ReactNode;href?:string})=> href?<Link className='px-5 py-3 rounded-full bg-violet-500 hover:bg-violet-400 inline-block' href={href}>{children}</Link>:<button className='px-5 py-3 rounded-full bg-violet-500 hover:bg-violet-400'>{children}</button>;
