import { NextRequest, NextResponse } from "next/server";
import { prisma, closePrismaConnection } from "@/prisma/prisma-client";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const query: string = req.nextUrl.searchParams.get("query") || "";

  const collections = await prisma.collection.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    take: 5,
  });

  // Закрываем соединение после завершения
  await closePrismaConnection();

  return NextResponse.json(collections);
}
