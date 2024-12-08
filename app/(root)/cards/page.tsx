import React from "react";
import { CollectionsList, SearchInput, TopBar } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function CollectionsPage() {
  const categories = await prisma.category.findMany({
    include: { collections: true },
  });
  return (
    <div>
      <div className="mx-10 flex-1">
        <SearchInput />
      </div>
      <TopBar
        categories={categories.filter(
          (category) => category.collections.length > 0,
        )}
      />
      <div className="ml-5 mt-4 h-screen">
        {categories.map(
          (category) =>
            category.collections.length > 0 && (
              <CollectionsList
                key={category.id}
                title={category.name}
                categoryId={category.id}
                items={category.collections}
              />
            ),
        )}
      </div>
    </div>
  );
}
