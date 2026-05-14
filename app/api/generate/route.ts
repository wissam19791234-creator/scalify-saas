export async function POST(request: Request) {
  const { prompt, style, sector, objective } = await request.json();
  const systemPrompt = `Tu es un expert en création de sites web pour commerces locaux français...`;
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY!, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 8000, system: systemPrompt, messages: [{ role: 'user', content: `${prompt}\nStyle demandé: ${style}\nSecteur: ${sector}\nObjectif principal: ${objective}` }] })
  });
  const data = await response.json(); const text = data.content?.[0]?.text || '';
  try { const jsonMatch = text.match(/{[\s\S]*}/); const parsed = JSON.parse(jsonMatch?.[0] || text); return Response.json({ success: true, data: parsed }); }
  catch { return Response.json({ success: false, error: 'Parse error', raw: text }, { status: 500 }); }
}
