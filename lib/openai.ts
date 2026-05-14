export async function generateWithAI(prompt: string) { if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY manquante'); return { content: `TODO: brancher OpenAI pour ${prompt}` }; }
