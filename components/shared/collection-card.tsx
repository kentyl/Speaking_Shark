import React from "react";
import Link from "next/link";
import { Title } from "./title";

interface Props {
  id: number;
  name: string;
  className?: string;
}

export const CollectionCard: React.FC<Props> = ({ id, name, className }) => {
  return (
    <div className={className}>
      <Link href={`/cards/${id}`}>
        <div className="relative w-full max-w-sm overflow-hidden rounded-lg bg-blue-200 p-4 hover:shadow-2xl sm:p-3 md:p-2">
          {/* Соотношение сторон */}
          <div className="flex aspect-[3/4.5] items-center justify-center overflow-hidden rounded-lg bg-blue-200">
            <Title
              text={name}
              size="sm"
              className="flex min-w-0 flex-col justify-end break-words text-center text-sm font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
