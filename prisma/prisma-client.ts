import { PrismaClient } from "@prisma/client";

declare global {
  // Чтобы избежать ошибки Typescript при повторном объявлении глобальной переменной.
  // Это нужно для Hot-Reload в Next.js.
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
