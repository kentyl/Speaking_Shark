import React from "react"; // React необходим для использования createElement
import { prisma, closePrismaConnection } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { CardsList } from "@/components/shared/CardsList";

interface CollectionPageProps {
  params: {
    id: string;
  };
}

export default async function CollectionPage({
  params,
}: CollectionPageProps): Promise<React.ReactElement | null> {
  const collectionId = Number(params.id);

  if (isNaN(collectionId)) {
    notFound();
    return null; // Добавляем возврат null для строгой типизации
  }

  const collection = await prisma.collection.findUnique({
    where: { id: collectionId },
    include: { card: true },
  });

  // Закрываем соединение после завершения
  await closePrismaConnection();

  if (!collection) {
    notFound();
    return null; // Возврат null вместо React-элемента
  }

  // Возвращаем элементы через React.createElement
  return React.createElement(
    "div",
    { className: "ml-5 h-screen" },
    React.createElement(CardsList, {
      title: collection.name,
      items: collection.card,
    }),
  );
}
