"use client";
import React, { useState } from "react";

export default function Homework() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const tests = [
    {
      name: "Тест по английскому",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSesMqlVhdaKKqX-tDn961Qgm1SAEgwdJLgt1a7hYpjfe2XDKg/viewform?usp=dialog",
    },
    {
      name: "Тест по деловым коммуникациям",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScBxyqYZfLnCIlvOyxLnsqQ6HjOEFiyz77/viewform?usp=dialog",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Актуальные задания
      </h1>

      {/* Список кнопок для выбора тестов */}
      <div className="mb-6 flex flex-col gap-4">
        {tests.map((test, index) => (
          <button
            key={index}
            className="text-black-600 rounded border-2 border-black bg-gray-200 px-4 py-2 font-bold hover:bg-gray-300 "
            onClick={() => setSelectedTest(test.url)}
          >
            {test.name}
          </button>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative h-[80vh] w-full max-w-4xl rounded-lg bg-white shadow-lg">
            {/* Кнопка закрыть */}
            <button
              onClick={() => setSelectedTest(null)}
              className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-gray-300 transition hover:bg-gray-400"
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

            {/* iframe для отображения теста */}
            <iframe
              src={selectedTest}
              width="100%"
              height="100%"
              className="rounded-lg"
              title="Homework Test"
              style={{ backgroundColor: "white" }}
            >
              Загрузка...
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}
