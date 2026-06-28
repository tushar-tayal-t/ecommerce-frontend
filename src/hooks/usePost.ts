import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPost, updatePost } from "@/lib/api";
import { UpdatePostInput } from "@/types/post";

export function usePost(id: number) {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    enabled: !!id, // don't run the query if id is falsy
  });
}

export function useUpdatePost(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdatePostInput) => updatePost(id, data),
    onSuccess: (updatedPost) => {
      // update the cache directly so UI reflects the change instantly
      queryClient.setQueryData(["posts", id], updatedPost);
      // mark the list as stale so it refetches next time it's viewed
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}