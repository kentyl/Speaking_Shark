"use client";

import React from "react";
import { Title } from "@/components/shared/title";
import { cn } from "@/lib/utils";
import { CollectionCard } from "@/components/shared/collection-card";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  onCardClick: () => void; // Проп для обработки клика
}

export const CollectionsList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  onCardClick,
}) => {
  return (
    <div className={className}>
      <Title
        text={title}
        className="xs:text-base mb-5 mt-6 text-xl font-extrabold sm:text-base lg:text-lg xl:text-xl 2xl:text-xl"
      />
      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[40px]",
        )}
      >
        {items.map((collection) => (
          <CollectionCard
            key={collection.id}
            id={collection.id}
            name={collection.name}
            onClick={onCardClick} // Передаем обработчик клика
          />
        ))}
      </div>
    </div>
  );
};
