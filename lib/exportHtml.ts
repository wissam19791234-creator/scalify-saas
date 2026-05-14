export const downloadHtml=(html:string,name='sitepilot-export.html')=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([html],{type:'text/html'}));a.download=name;a.click();};
