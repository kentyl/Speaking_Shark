import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message, chatHistory, model } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    const chatCompletion = await openai.chat.completions.create({
      model: model || "gpt-3.5-turbo", // Используем переданную модель или по умолчанию gpt-3.5-turbo
      messages: [
        ...chatHistory, // Отправляем последние 3 сообщения из истории
        { role: "user", content: message },
      ],
      max_tokens: 1000, // Лимит токенов для ответа
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
