import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { message, chatHistory } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );
    }

    // Формируем массив сообщений для отправки в OpenAI
    const messages = [
      ...chatHistory, // Передаем предыдущую переписку
      { role: "user", content: message }, // Добавляем текущее сообщение
    ];

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
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
