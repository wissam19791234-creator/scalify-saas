import type { ReactNode } from 'react';
import { Card } from './ui';
export default function FormationCard({title,children}:{title?:string;children?:ReactNode}){return <Card><h3 className='font-semibold'>{title ?? 'FormationCard'}</h3>{children}</Card>}
