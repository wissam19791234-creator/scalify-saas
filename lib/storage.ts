export const saveProject=(project:any)=>{if(typeof window==='undefined')return; const arr=JSON.parse(localStorage.getItem('sitepilot_projects')||'[]'); arr.unshift(project); localStorage.setItem('sitepilot_projects',JSON.stringify(arr.slice(0,30)));};
export const readProjects=()=>{if(typeof window==='undefined')return []; return JSON.parse(localStorage.getItem('sitepilot_projects')||'[]');};
