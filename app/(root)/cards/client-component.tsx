"use client"; // Этот компонент работает на клиенте

import React, { useState, useEffect, useRef } from "react";
import { CollectionsList, Spinner } from "@/components/shared";
import { useCategoryStore } from "@/components/category_active";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
}

const ClientComponent: React.FC<Props> = ({ title, items, categoryId }) => {
  const [loading, setLoading] = useState(false);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef<HTMLDivElement | null>(null);

  // Обработка клика на карточке
  const handleCardClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Симулируем асинхронный процесс
  };

  // Используем IntersectionObserver для обновления активной категории
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveCategoryId(categoryId); // Обновляем активную категорию
        }
      },
      { root: null, rootMargin: "0px 0px -50% 0px", threshold: 0.5 },
    );

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current);
      }
    };
  }, [categoryId, setActiveCategoryId]);

  return (
    <div ref={intersectionRef} id={title}>
      {loading && <Spinner />}
      <CollectionsList
        title={title}
        items={items}
        categoryId={categoryId}
        onCardClick={handleCardClick} // Передаем обработчик клика
      />
    </div>
  );
};

export default ClientComponent;
