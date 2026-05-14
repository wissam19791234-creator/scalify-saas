export default function SitePreview({html}:{html:string}){return <div className='card p-3'><iframe srcDoc={html} className='w-full h-[520px] rounded-xl border'/></div>}
