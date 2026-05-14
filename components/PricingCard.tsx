import type { ReactNode } from 'react';
import { Card } from './ui';
export default function PricingCard({title,children}:{title?:string;children?:ReactNode}){return <Card><h3 className='font-semibold'>{title ?? 'PricingCard'}</h3>{children}</Card>}
