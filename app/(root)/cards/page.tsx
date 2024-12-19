import React from "react";
import { SearchInput, TopBar } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import ClientComponent from "./client-component"; // Клиентский компонент

const fetchCategories = async () => {
  return prisma.category.findMany({
    include: { collections: true },
  });
};

export default async function CollectionsPage() {
  const categories = await fetchCategories();

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
              <ClientComponent
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
