import React from "react";
import { CollectionsList } from "@/components/shared/collectonsList";
import { SearchInput } from "@/components/shared/search-input";
import { prisma } from "@/prisma/prisma-client";

export default async function CollectionsPage() {
  const collections = await prisma.collection.findMany({
    include: { card: true },
  });
  return (
    <div>
      <div className="mx-10 flex-1">
        <SearchInput />
      </div>
      <div className="ml-5 mt-4 h-screen">
        <CollectionsList title="Карточки" items={collections} />
      </div>
    </div>
  );
}
