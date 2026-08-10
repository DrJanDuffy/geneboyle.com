import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

function getOpenRouterClient() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new OpenAI({
    apiKey,
    baseURL: "https://openrouter.ai/api/v1",
  });
}

export async function POST(request: NextRequest) {
  try {
    const { prompt, conversation = [] } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const openrouter = getOpenRouterClient();
    if (!openrouter) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 },
      );
    }

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are a friendly real estate assistant for Dr. Gene Boyle (California DRE #02282581), who helps clients relocate from Irvine to Las Vegas with partner Dr. Jan Duffy (S.0197614.LLC), Berkshire Hathaway HomeServices Nevada Properties. Be concise, warm, helpful, and professional. For pricing or deal specifics, direct users to call (702) 222-1964. Do not use protected-class proxies (e.g. \"safe neighborhood,\" \"good schools,\" \"family-friendly\"); describe square footage, amenities, and commute times instead.",
      },
      ...conversation,
      {
        role: "user",
        content: prompt,
      },
    ];

    const response = await openrouter.chat.completions.create({
      model: "anthropic/claude-3.5-haiku",
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const reply = response.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 },
    );
  }
}
