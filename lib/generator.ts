import { BusinessInput, GeneratedSite } from '@/types';
const sectors = ['beauté','événementiel','automobile','restaurant','boutique','immobilier','coaching','service local','e-commerce','luxe','médical'];
const styles = ['luxe','minimaliste','sombre','clair','coloré','futuriste','féminin','premium','naturel','local'];
const goals = ['devis','réservation','appel','whatsapp','vente en ligne','leads','image premium'];
const automations = ['devis automatique','réservation','chatbot','relance','paiement','shopify','whatsapp','crm'];
const paletteBySector: Record<string,string[]> = { 'beauté':['#f5ede0','#d4af37','#fff8ef'], 'événementiel':['#0f0f13','#9b5de5','#d4af37'], automobile:['#111','#d90429','#bfc0c0'], restaurant:['#f6efe0','#8b5a2b','#f77f00'], immobilier:['#fff','#1d3557','#a8dadc']};

export function parsePrompt(input: BusinessInput): GeneratedSite {
  const text = `${input.prompt} ${input.services ?? ''}`.toLowerCase();
  const sector = sectors.find((s) => text.includes(s)) ?? input.sector ?? 'service local';
  const style = styles.find((s) => text.includes(s)) ?? input.style ?? 'premium';
  const goal = goals.find((g) => text.includes(g)) ?? input.objective ?? 'génération de leads';
  const city = input.city ?? (text.match(/(?:à|sur|près de|ville de)\s+([a-zà-ÿ-]+)/i)?.[1] ?? 'votre ville');
  const businessName = input.businessName ?? (text.match(/(?:pour|nom|commerce|entreprise|marque)\s+([\w'’-]+)/i)?.[1] ?? 'Votre Commerce');
  const services = [...new Set((text.match(/(?:avec|services|prestations|produits|propose)\s+([^.,;]+)/i)?.[1] ?? 'Service premium').split(/,|et/).map((x)=>x.trim()).filter(Boolean))];
  const automationNeeds = automations.filter((a) => text.includes(a));
  const palette = paletteBySector[sector] ?? ['#eef2ff','#7c3aed','#111827'];
  return {
    businessName, city, sector, style, goal, services, automationNeeds, palette,
    sections:['Header','Hero','Problème','Services','Automatisation','Galerie','Avis','FAQ','Formulaire','Footer'],
    cta: goal.includes('réservation') ? 'Réserver maintenant' : 'Demander une démo',
    generatedCopy:{heroTitle:`${businessName} - ${sector} ${style} à ${city}`,heroSubtitle:`Maquette premium orientée ${goal}.`,problem:`Vos prospects se perdent entre DM et appels manqués.`,faq:['Faut-il coder ? Non.','Puis-je utiliser mes photos ? Oui.','Résultats garantis ? Non, aucune promesse de revenus.']}
  };
}
