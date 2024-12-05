import React from "react"; // React необходим для использования createElement
import { prisma, closePrismaConnection } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { CardsList } from "@/components/shared/CardsList";

export default async function CollectionPage(props: {
  params: { id: string };
}): Promise<React.ReactElement> {
  const params = await props.params;
  const collectionId = Number(params.id);

  if (isNaN(collectionId)) {
    return notFound();
  }

  const collection = await prisma.collection.findUnique({
    where: { id: collectionId },
    include: { card: true },
  });

  // Закрываем соединение после завершения
  await closePrismaConnection();

  if (!collection) {
    return notFound();
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
