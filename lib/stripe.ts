export async function createCheckoutSession(plan: 'starter'|'pro'|'agence') { const planId = process.env[`STRIPE_PLAN_${plan.toUpperCase()}_ID`]; return { url: '/pricing', planId }; }
