import React from "react";

const CollectionCard = ({ collection }) => {
  return (
    <div className="flex flex-col items-center rounded-lg border p-4 shadow-lg">
      <img
        src={collection.imageUrl}
        alt={collection.name}
        className="mb-4 h-40 w-full object-cover"
      />
      <h2 className="text-lg font-bold">{collection.name}</h2>
      {collection.isNew && (
        <span className="mt-2 rounded-full bg-red-500 px-2 py-1 text-sm text-white">
          Новинка
        </span>
      )}
      <p className="mt-2 text-gray-600">{collection.description}</p>
      <p className="mt-4 text-lg font-bold">{collection.price} ₽</p>
      <button className="mt-4 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
        Выбрать
      </button>
    </div>
  );
};

export default CollectionCard;
