import React from "react";
import Link from "next/link";
import { Title } from "../title";

interface Props {
  id: number;
  en_w: string;
  ru_w: string;
  className?: string;
}

export const Card: React.FC<Props> = ({ id, en_w, ru_w, className }) => {
  return (
    <div
      className={`aspect-[3/4] rounded-lg border bg-teal-50 p-6 shadow-md transition-shadow hover:shadow-lg sm:p-8 ${className}`}
    >
      <Link href={`/cards/${id}`}>
        <div className="cursor-pointer">
          {/* Заголовок */}
          <Title
            text={`${id}`}
            size="lg"
            className="text-xl font-bold text-teal-700"
          />

          {/* Содержимое карточки */}
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-800">
              <span className="text-teal-600">EN:</span> {en_w}
            </p>
            <p className="text-lg font-semibold text-gray-800">
              <span className="text-teal-600">RU:</span> {ru_w}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
