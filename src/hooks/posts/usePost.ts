import { useQuery } from "@tanstack/react-query";
import { postsApi } from "@/services/posts/posts.api";

export function usePost(id: number) {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => postsApi.getById(id),
    enabled: !!id,
  });
}