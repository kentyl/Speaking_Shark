"use client";

import { useCategoryStore } from "@/components/category_active";
import { category } from "@prisma/client";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  items: category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  return (
    <div className={cn("inline-flex gap-1 bg-gray-200 rounded-2xl", className)}>
      {items.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer transition-colors",
            categoryActiveId === id
              ? "bg-white shadow-md shadow-gray-200 text-primary"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300",
          )}
          href={`#${name}`}
          key={index}
          onClick={() => setActiveCategoryId(id)} // Устанавливаем активный ID при клике
        >
          {name}
        </a>
      ))}
    </div>
  );
};
