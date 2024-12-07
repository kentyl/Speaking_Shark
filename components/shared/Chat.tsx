"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<
    { role: string; content: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChatHistory([...chatHistory, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      const { data } = await axios.post("/api/ai", { message });
      setChatHistory([
        ...chatHistory,
        { role: "user", content: message },
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory([
        ...chatHistory,
        { role: "assistant", content: "Error: Unable to get response." },
      ]);
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Предотвращаем перенос строки
      sendMessage();
    }
  };

  return (
    <div className="flex h-full flex-col rounded-lg bg-gray-300 shadow-lg">
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
          <div className="mb-4 text-center text-gray-500">Загрузка...</div>
        )}
      </div>
      {/* Поле ввода */}
      <div className="flex items-center p-4">
        <div className="mr-2 flex items-center justify-center">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                console.log("File uploaded:", e.target.files[0]);
              }
            }}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer rounded-full p-1 hover:bg-gray-100"
          >
            <Image
              width={40}
              height={40}
              src={"/assets/img/paperclip.png"}
              alt={"files upload"}
            />
          </label>
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} // Добавлено событие для отправки при Enter
          placeholder="Спросите о чём-либо..."
          className="w-full flex-1 rounded-full border p-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto"
        />

        <button
          onClick={sendMessage}
          disabled={isLoading}
          className={`ml-3 flex size-10 items-center justify-center rounded-full bg-blue-500 text-white ${
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
