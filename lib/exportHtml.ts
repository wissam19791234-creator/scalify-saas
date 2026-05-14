import { GeneratedSite } from '@/types';
export function buildHtml(site: GeneratedSite, images: string[]) {
  const hero = images[0] ? `<img src="${images[0]}" style="max-width:100%;border-radius:16px"/>` : '<div style="height:220px;background:#ddd;border-radius:16px"></div>';
  const gallery = images.slice(1).map((img)=>`<img src="${img}" style="width:32%;border-radius:12px"/>`).join('');
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"/><style>body{font-family:Arial;background:${site.palette[0]};margin:0}section{padding:24px}.btn{background:${site.palette[1]};color:#fff;padding:10px 16px;border-radius:999px;display:inline-block}</style></head><body><section><h1>${site.generatedCopy.heroTitle}</h1><p>${site.generatedCopy.heroSubtitle}</p>${hero}<p><a class="btn">${site.cta}</a></p></section><section><h2>Services</h2>${site.services.map(s=>`<li>${s}</li>`).join('')}</section><section><h2>Galerie</h2><div>${gallery}</div></section></body></html>`;
}
