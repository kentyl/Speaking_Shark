import React from "react";

interface Props {
  id: number;
  en_w: string;
  ru_w: string;
  className?: string;
}

export const Card: React.FC<Props> = ({ id, en_w, ru_w, className }) => {
  return (
    <div
      className={`relative flex aspect-[3/4.5] rounded-lg border bg-teal-50 p-6 shadow-md transition-shadow hover:shadow-lg sm:p-8 ${className}`}
    >
      {/* Номер карточки */}
      <div className="absolute left-2 top-2 text-xs font-bold text-teal-700 sm:text-sm">
        {id}
      </div>

      <div className="w-full cursor-pointer overflow-hidden">
        {/* Содержимое карточки */}
        <div className="flex h-full flex-col justify-center gap-2 text-center">
          {/* Английское слово */}
          <p className="overflow-hidden break-words text-base font-semibold text-gray-800 sm:text-lg">
            <span className="font-bold text-teal-600">EN:</span> {en_w}
          </p>

          {/* Русское слово — скрыто на маленьких устройствах */}
          <p className="hidden overflow-hidden break-words text-base font-semibold text-gray-800 sm:block sm:text-lg">
            <span className="font-bold text-teal-600">RU:</span> {ru_w}
          </p>
        </div>
      </div>
    </div>
  );
};
