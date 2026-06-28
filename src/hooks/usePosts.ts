import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
}