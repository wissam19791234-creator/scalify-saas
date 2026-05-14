import type { ReactNode } from 'react';
import { Card } from './ui';
export default function Hero({title,children}:{title?:string;children?:ReactNode}){return <Card><h3 className='font-semibold'>{title ?? 'Hero'}</h3>{children}</Card>}
