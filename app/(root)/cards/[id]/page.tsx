import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { CardsList } from "@/components/shared/CardsList";
import React from "react";

export default async function CollectionPage({
  params,
}: {
  params: { id: string };
}) {
  // Преобразуем ID из строки в число
  const collectionId = Number(params.id);

  // Если ID невалидный, возвращаем 404
  if (isNaN(collectionId)) {
    return notFound();
  }

  // Получаем коллекцию вместе с её карточками
  const collection = await prisma.collection.findUnique({
    where: { id: collectionId },
    include: {
      card: true, // Загружаем связанные карточки
    },
  });

  // Если коллекция не найдена, возвращаем 404
  if (!collection) {
    return notFound();
  }

  // Рендерим страницу с компонентом CardsList
  return (
    <div className="ml-5 h-screen">
      <CardsList title={collection.name} items={collection.card} />
    </div>
  );
}
