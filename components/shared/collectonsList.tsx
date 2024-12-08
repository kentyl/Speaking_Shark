"use client";

import React from "react";
import { Title } from "@/components/shared/title";
import { cn } from "@/lib/utils";
import { CollectionCard } from "@/components/shared/collection-card";
import { useCategoryStore } from "@/components/category_active";
import { useIntersection } from "react-use";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
}

export const CollectionsList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
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
          />
        ))}
      </div>
    </div>
  );
};
