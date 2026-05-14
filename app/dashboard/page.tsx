import Sidebar from '@/components/dashboard/Sidebar'; import Generator from '@/components/dashboard/Generator'; import HistoryGrid from '@/components/dashboard/HistoryGrid';
export default function Page(){return <div className='p-4 flex gap-4'><Sidebar/><main className='flex-1'><Generator/><h3 className='text-2xl mt-6'>Mes sites</h3><HistoryGrid/></main></div>}
