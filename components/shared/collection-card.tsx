import React from "react";
import Link from "next/link";
import { Title } from "../title";

interface Props {
  id: number;
  name: string;
  className?: string;
}

export const CollectionCard: React.FC<Props> = ({ id, name, className }) => {
  return (
    <div className={className}>
      <Link href={`/cards/${id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-blue-200 p-6">
          <Title
            text={name}
            size="sm"
            className="flex flex-col justify-end font-bold"
          />
        </div>
      </Link>
    </div>
  );
};
