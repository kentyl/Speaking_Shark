import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // Убедитесь, что переменная окружения настроена
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Или 'gpt-4'
      messages: [{ role: "user", content: message }],
      max_tokens: 150,
    });

    const gptMessage =
      chatCompletion.choices[0]?.message?.content || "No response";

    return NextResponse.json({ response: gptMessage });
  } catch (error: any) {
    console.error("Error communicating with OpenAI:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
