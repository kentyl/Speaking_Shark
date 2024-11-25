export const fetchCollections = async () => {
  try {
    const response = await fetch("/api/collections"); // Убедись, что путь совпадает с твоим сервером
    if (!response.ok) {
      throw new Error("Ошибка загрузки данных");
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка:", error);
    return [];
  }
};
