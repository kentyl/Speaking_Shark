import React from "react";

interface FlipCardModalProps {
  enWord: string;
  ruWord: string;
  onClose: () => void;
}

const FlipCardModal: React.FC<FlipCardModalProps> = ({
  enWord,
  ruWord,
  onClose,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative h-96 w-64 transform-gpu cursor-pointer rounded-lg bg-blue-200 shadow-lg transition-transform duration-500"
        onClick={handleFlip}
      >
        {/* Лицевая сторона */}
        <div
          className={`absolute flex size-full items-center justify-center rounded-lg bg-blue-500 text-2xl font-bold text-white ${
            isFlipped ? "hidden" : "block"
          } transition-all`}
        >
          {enWord}
        </div>

        {/* Обратная сторона */}
        <div
          className={`absolute flex size-full items-center justify-center rounded-lg bg-blue-700 text-2xl font-bold text-white ${
            isFlipped ? "block" : "hidden"
          } transition-all`}
        >
          {ruWord}
        </div>
      </div>

      {/* Кнопка закрытия */}
      <button
        className="absolute right-4 top-4 rounded-full bg-red-500 px-4 py-2 text-white"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default FlipCardModal;
