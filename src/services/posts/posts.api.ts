import { httpClient } from "@/lib/http-client";
import { Post } from "./posts.types";

export const postsApi = {
  getAll: async (): Promise<Post[]> => {
    const { data } = await httpClient.get<Post[]>("/posts");
    return data;
  },

  getById: async (id: number): Promise<Post> => {
    const { data } = await httpClient.get<Post>(`/posts/${id}`);
    return data;
  },
};