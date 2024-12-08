import { PrismaClient } from "@prisma/client";

// Расширяем тип globalThis для добавления свойства prisma
declare global {
  // Объявляем prisma как свойство globalThis
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Создаем клиент Prisma
export const prisma: PrismaClient = global.prisma ?? new PrismaClient({});

// Сохраняем клиент в глобальной переменной в режиме разработки
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

// Функция для завершения соединения
export async function closePrismaConnection(): Promise<void> {
  try {
    if (prisma) {
      await prisma.$disconnect(); // Закрытие соединения
    }
  } catch (error) {
    console.error("Ошибка при закрытии соединения Prisma:", error);
  }
}
