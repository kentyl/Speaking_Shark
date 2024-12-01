import React from "react";
import { Title } from "@/components/title";
import { cn } from "@/lib/utils";
import { Card } from "@/components/shared/card";

interface Props {
  title: string;
  items: any[];
  className?: string;
}

export const CardsList: React.FC<Props> = ({ title, items, className }) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn("grid grid-cols-6 gap-[50px]")}>
        {items.map((card) => (
          <Card key={card.id} id={card.id} ru_w={card.ru_w} en_w={card.en_w} />
        ))}
      </div>
    </div>
  );
};
