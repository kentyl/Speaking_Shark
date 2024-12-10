"use client";

import React, { useState } from "react";
import axios from "axios";

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<
    { role: string; content: string }[]
  >([]);
  const [isHistoryEnabled, setIsHistoryEnabled] = useState<boolean>(false);
  const [model, setModel] = useState<string>("gpt-3.5-turbo"); // Модель по умолчанию
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Очистка поля ввода сразу после отправки
    const currentMessage = message;
    setMessage("");

    // Обработка специальных команд
    if (currentMessage === "save history") {
      setIsHistoryEnabled(true); // Включаем отправку истории
      return;
    }

    if (currentMessage === "to 4o") {
      setModel("gpt-4o-mini"); // Переключаемся на gpt-4o-mini
      return;
    }

    // Обновляем историю сообщений
    const updatedChatHistory = [
      ...chatHistory,
      { role: "user", content: currentMessage },
    ].slice(-3); // Ограничиваем последние 3 сообщения

    setChatHistory(updatedChatHistory);
    setIsLoading(true);

    try {
      const { data } = await axios.post("/api/ai", {
        message: currentMessage,
        chatHistory: isHistoryEnabled ? updatedChatHistory : [], // Отправляем историю только если включена
        model, // Передаем текущую модель
      });

      setChatHistory([
        ...updatedChatHistory,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory([
        ...updatedChatHistory,
        { role: "assistant", content: "Error: Unable to get response." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-full flex-col rounded-lg bg-gray-300 shadow-lg">
      {/* Информация о модели и истории */}
      <div className="p-4 text-center text-sm font-medium text-gray-700">
        <div>Используемая модель: {model}</div>
        {isHistoryEnabled && (
          <div className="text-sm text-gray-700">История активна</div>
        )}
      </div>

      {/* История чата */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex items-start ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-lg p-3 ${
                msg.role === "user"
                  ? "self-end bg-blue-500 text-white"
                  : "self-start bg-gray-200 text-gray-800"
              }`}
              style={{ maxWidth: "75%" }}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="mb-4 text-center text-gray-500">
            Загрузка, подождите...
          </div>
        )}
      </div>

      {/* Поле ввода */}
      <div className="flex items-center p-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Введите сообщение..."
          className="w-full flex-1 rounded-full border p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto"
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          className={`ml-3 flex size-10 items-center justify-center rounded-full bg-blue-500 text-white hover:shadow-xl ${
            isLoading ? "cursor-not-allowed bg-blue-300" : "hover:bg-blue-600"
          }`}
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default Chat;
