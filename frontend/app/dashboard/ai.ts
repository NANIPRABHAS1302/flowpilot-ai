import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_GROK_API_KEY,
  baseURL: "https://api.x.ai/v1",
  dangerouslyAllowBrowser: true,
});

export async function generateWorkflow(prompt: string) {

  try {

    const completion = await client.chat.completions.create({
      model: "grok-beta",

      messages: [
        {
          role: "system",
          content:
            "You are an advanced AI workflow orchestration system for enterprise business operations.",
        },

        {
          role: "user",
          content: `
Generate professional AI multi-agent workflow actions for this issue:

${prompt}

Include:
1. Support Agent action
2. Billing Agent action
3. Analytics Agent action
4. Final Resolution

Make the response professional and structured.
          `,
        },
      ],

      temperature: 0.7,
      max_tokens: 500,
    });

    return (
      completion.choices[0].message.content ||
      "No response generated."
    );

  } catch (error) {

    console.error(error);

    return `
AI Workflow Error

Unable to process the workflow request currently.

Possible reasons:
- API quota exceeded
- Invalid API key
- Network issue

Please try again later.
    `;
  }
}