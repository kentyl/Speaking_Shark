import React from "react";
import { Title } from "@/components/title";
import { cn } from "@/lib/utils";
import { CollectionCard } from "@/components/shared/collection-card";

interface Props {
  title: string;
  items: any[];
  className?: string;
}

export const CollectionsList: React.FC<Props> = ({
  title,
  items,
  className,
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
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
          />
        ))}
      </div>
    </div>
  );
};
