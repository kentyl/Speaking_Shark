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
        <div className="relative w-full max-w-sm overflow-hidden rounded-lg bg-blue-200 p-4 sm:p-3 md:p-2">
          {/* Соотношение сторон */}
          <div className="flex aspect-[3/4.5] items-center justify-center rounded-lg bg-blue-200">
            <Title
              text={name}
              size="sm"
              className="flex flex-col justify-end break-words text-center font-bold"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
