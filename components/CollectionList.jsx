import React, { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import { fetchCollections } from "../app/api/database/api";

const CollectionList = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Загрузка данных с API
    fetchCollections().then((data) => setCollections(data));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">Коллекции</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
