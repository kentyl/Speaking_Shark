"use client";
import React, { useState } from "react";

interface FlipCardModalProps {
  enWord: string;
  ruWord: string;
  currentIndex: number;
  totalCards: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const FlipCardModal: React.FC<FlipCardModalProps> = ({
  enWord,
  ruWord,
  currentIndex,
  totalCards,
  onClose,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-12 sm:p-10 md:p-8 lg:p-6 xl:p-4 2xl:p-2">
      <div className="relative h-96 w-80 rounded-lg bg-white shadow-lg transition-transform duration-500">
        {/* Карточка */}
        <div
          className={`relative size-full rounded-lg bg-white shadow-lg transition-transform duration-500${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={handleFlip}
        >
          {/* Лицевая сторона */}
          <div
            className={`absolute flex size-full items-center justify-center rounded-lg bg-sky-600 text-2xl font-bold text-white ${
              isFlipped ? "hidden" : "block"
            }`}
          >
            {enWord}
          </div>

          {/* Обратная сторона */}
          <div
            className={`absolute flex size-full items-center justify-center rounded-lg bg-sky-800 text-2xl font-bold text-white ${
              isFlipped ? "block" : "hidden"
            }`}
          >
            {ruWord}
          </div>
        </div>

        <p className="mt-5 text-center text-2xl">
          Карточка {currentIndex} из {totalCards}
        </p>

        {/* Кнопки листания */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-[-33px] top-0 flex h-full w-10 items-center justify-center rounded-l-2xl bg-gray-600 text-white shadow-md transition-colors active:bg-gray-400"
          >
            ←
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-[-33px] top-0 flex h-full w-10 items-center justify-center rounded-r-2xl bg-gray-600 text-white shadow-md transition-colors active:bg-gray-400"
          >
            →
          </button>
        )}

        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute right-[-33px] top-[-45px] flex size-9 items-center justify-center rounded-full bg-gray-300 shadow-md transition-colors hover:bg-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FlipCardModal;
