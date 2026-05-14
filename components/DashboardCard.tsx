import type { ReactNode } from 'react';
import { Card } from './ui';
export default function DashboardCard({title,children}:{title?:string;children?:ReactNode}){return <Card><h3 className='font-semibold'>{title ?? 'DashboardCard'}</h3>{children}</Card>}
