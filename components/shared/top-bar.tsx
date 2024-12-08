import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
import { category } from "@prisma/client";

interface Props {
  categories: category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 left-1/2 transform z-10", // Фиксация сверху и центрирование
        "w-full max-w-screen-lg", // Ширина с ограничением
        "hidden sm:block", // Скрывать на маленьких экранах
        className,
      )}
    >
      <Container className="flex items-center justify-between rounded-md p-4">
        <Categories items={categories} />
      </Container>
    </div>
  );
};
