"use client";

import React, { useState } from "react";
import FlipCardModal from "./one_Flip-card";

interface ClientFlipCardsProps {
    title: string;
    items: { id: number; en_w: string; ru_w: string }[];
}

const ClientFlipCards: React.FC<ClientFlipCardsProps> = ({ title, items }) => {
    const [selectedCard, setSelectedCard] = useState<{ en_w: string; ru_w: string } | null>(null);

    const handleCardClick = (card: { en_w: string; ru_w: string }) => {
        setSelectedCard(card); // Открываем модал с выбранной карточкой
    };

    const closeModal = () => {
        setSelectedCard(null); // Закрываем модальное окно
    };

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">{title}</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((card) => (
                    <div
                        key={card.id}
                        className="flex h-40 w-64 cursor-pointer items-center justify-center rounded-lg bg-blue-300 text-lg font-bold text-white shadow-md"
                        onClick={() => handleCardClick(card)} // Обрабатываем клик по карточке
                    >
                        {card.en_w}
                    </div>
                ))}
            </div>

            {/* Модальное окно FlipCard */}
            {selectedCard && (
                <FlipCardModal
                    enWord={selectedCard.en_w}
                    ruWord={selectedCard.ru_w}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default ClientFlipCards;