export type BusinessInput = { prompt: string; businessName?: string; city?: string; email?: string; phone?: string; instagram?: string; services?: string; colors?: string; objective?: string; sector?: string; style?: string; formType?: string };
export type GeneratedSite = { businessName: string; city: string; sector: string; style: string; goal: string; services: string[]; automationNeeds: string[]; palette: string[]; sections: string[]; cta: string; generatedCopy: { heroTitle: string; heroSubtitle: string; problem: string; faq: string[] } };
export type UserPlan = 'Starter' | 'Pro' | 'Agence';
export type CreditTransaction = { date: string; amount: number; reason: string };
