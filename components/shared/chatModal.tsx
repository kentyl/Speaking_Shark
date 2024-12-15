import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Что такое ChatGPT?</h2>
        <p className="mb-6 text-gray-700">
          ChatGPT — это мощный AI чат-бот, разработанный OpenAI, который
          способен генерировать текст, отвечать на вопросы и многое другое. Он
          может помочь вам в изучении языка: предложит правильную программу и
          план занятий, найдет нужны слова и транскрипции к ним. Всё, что
          угодно! Используйте его, чтобы получить помощь в реальном времени!
        </p>
        <button
          onClick={onClose}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default Modal;
