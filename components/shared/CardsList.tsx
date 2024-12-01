"use client";
import React, { useState } from "react";
import { Title } from "@/components/title";
import { cn } from "@/lib/utils";
import { Card } from "@/components/shared/card";
import FlipCardModal from "@/components/shared/FlipCardModal"; // Импортируем модальное окно

interface Props {
  title: string;
  items: { id: number; en_w: string; ru_w: string }[];
  className?: string;
}

export const CardsList: React.FC<Props> = ({ title, items, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние модального окна
  const [currentIndex, setCurrentIndex] = useState(0); // Текущий индекс карточки

  const handleOpenModal = () => {
    setCurrentIndex(0); // Начинаем с первой карточки
    setIsModalOpen(true); // Открываем модальное окно
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleCloseModal(); // Закрываем модальное окно, если достигнут конец
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={className}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <button
        onClick={handleOpenModal}
        className="mb-3 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Начать обучение
      </button>
      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[50px]",
        )}
      >
        {items.map((card) => (
          <Card key={card.id} id={card.id} ru_w={card.ru_w} en_w={card.en_w} />
        ))}
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <FlipCardModal
          enWord={items[currentIndex].en_w}
          ruWord={items[currentIndex].ru_w}
          currentIndex={currentIndex + 1}
          totalCards={items.length}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < items.length - 1}
        />
      )}
    </div>
  );
};
