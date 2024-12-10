"use client";
import React, { useState } from "react";

export default function Homework() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const tests = [
    {
      name: "Д/з по английскому языку",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSesMqlVhdaKKqX-tDn961Qgm1SAEgwdJLgt1a7hYpjfe2XDKg/viewform?usp=dialog",
    },
    {
      name: "Тест на тему: Conditionals",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfqUb_P3HEFyhEmx1gYkTTvKglvXAzSOTXQcmSqukAWRLXgSQ/viewform?usp=dialog",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-300 via-blue-200 to-blue-100 p-4">
      <h1 className="mb-6 text-center text-4xl font-bold text-gray-800 drop-shadow-md">
        Актуальные задания
      </h1>

      {/* Список кнопок для выбора тестов */}
      <div className="mb-6 flex flex-col gap-4">
        {tests.map((test, index) => (
          <button
            key={index}
            className="rounded-lg border-2 border-gray-700 bg-white px-6 py-3 text-lg font-semibold text-gray-800 shadow-md transition-all hover:bg-gray-300 hover:shadow-xl"
            onClick={() => setSelectedTest(test.url)}
          >
            {test.name}
          </button>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
          <div className="relative h-[80vh] w-full max-w-4xl rounded-xl bg-white p-4 shadow-xl">
            {/* Кнопка закрыть */}
            <button
              onClick={() => setSelectedTest(null)}
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition hover:bg-gray-300 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-5"
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
            >
              Загрузка...
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
}
