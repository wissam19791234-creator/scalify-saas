import type { ReactNode } from 'react';
import { Card } from './ui';
export default function ProjectCard({title,children}:{title?:string;children?:ReactNode}){return <Card><h3 className='font-semibold'>{title ?? 'ProjectCard'}</h3>{children}</Card>}
