import { collection } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const search = async (query: string): Promise<collection[]> => {
  return (
    await axiosInstance.get<collection[]>(ApiRoutes.SEARCH_COLLECTIONS, {
      params: { query },
    })
  ).data;
};
