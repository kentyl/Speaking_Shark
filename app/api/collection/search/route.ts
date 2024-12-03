import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    // Получаем параметр `query` из URL
    const query = req.nextUrl.searchParams.get("query") || "";

    // Выполняем запрос к базе данных через Prisma
    const collections = await prisma.collection.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive", // Регистронезависимый поиск
        },
      },
      take: 5, // Лимитируем количество результатов
    });

    // Возвращаем результат в формате JSON
    return NextResponse.json(collections);
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
