import React from "react"; // React необходим даже без JSX
import { CollectionsList } from "@/components/shared/collectonsList";
import { SearchInput } from "@/components/shared/search-input";
import { prisma, closePrismaConnection } from "@/prisma/prisma-client";

export default async function CollectionsPage(): Promise<React.ReactElement> {
  const collections = await prisma.collection.findMany({
    include: { card: true },
  });

  // Закрываем соединение после завершения
  await closePrismaConnection();

  // Создаем элементы вручную с помощью React.createElement
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "mx-10 flex-1" },
      React.createElement(SearchInput, null),
    ),
    React.createElement(
      "div",
      { className: "ml-5 mt-4 h-screen" },
      React.createElement(CollectionsList, {
        title: "Карточки",
        items: collections,
      }),
    ),
  );
}
