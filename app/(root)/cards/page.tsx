import React from "react";
import { prisma } from "@/prisma/prisma-client";
import { CollectonsList } from "@/components/shared/collectonsList";
import { SearchInput } from "@/components/shared/search-input";

export default async function CollectionsPage() {
  try {
    // Выполняем Prisma-запрос на сервере
    const collections = await prisma.collection.findMany({
      include: { card: true },
    });

    return (
      <div>
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        <div className="ml-5 mt-4 h-screen">
          <CollectonsList title="Карточки" items={collections} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Ошибка при получении коллекций:", error);
    return (
      <div>
        <p>Не удалось загрузить данные.</p>
      </div>
    );
  }
}
