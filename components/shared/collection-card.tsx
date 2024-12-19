import React from "react";
import Link from "next/link";
import { Title } from "./title";

interface Props {
  id: number;
  name: string;
  className?: string;
  onClick?: () => void; // Добавили проп для клика
}

export const CollectionCard: React.FC<Props> = ({
  id,
  name,
  className,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Остановим переход по ссылке, если нужно
    if (onClick) {
      onClick(); // Вызываем переданную функцию
    }
  };

  return (
    <div className={className} onClick={handleClick}>
      <Link href={`/cards/${id}`}>
        <div className="relative w-full max-w-sm overflow-hidden rounded-lg bg-blue-200 p-4 hover:shadow-2xl sm:p-3 md:p-2">
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
