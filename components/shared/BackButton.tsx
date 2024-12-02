"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  parentPath: string; // Родительский маршрут
}

const BackButton: React.FC<BackButtonProps> = ({ parentPath }) => {
  const router = useRouter();

  const handleBack = () => {
    router.push(parentPath); // Навигация на родительский маршрут
  };

  return (
    <button
      onClick={handleBack}
      className="mt-3 flex items-center gap-2 rounded-full bg-blue-200 px-4 py-2 text-sm shadow-lg transition-all duration-300 hover:bg-blue-200 sm:text-base md:text-lg"
    >
      {/* Иконка стрелки */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 sm:size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Назад
    </button>
  );
};

export default BackButton;
