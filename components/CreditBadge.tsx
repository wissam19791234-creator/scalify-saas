import type { ReactNode } from 'react';
import { Card } from './ui';
export default function CreditBadge({title,children}:{title?:string;children?:ReactNode}){return <Card><h3 className='font-semibold'>{title ?? 'CreditBadge'}</h3>{children}</Card>}
