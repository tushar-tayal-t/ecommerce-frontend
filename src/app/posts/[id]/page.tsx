"use client";

import { useParams } from "next/navigation";
import { usePost } from "@/hooks/posts/usePost";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const { data: post, isLoading, isError } = usePost(id);

  if (isLoading) {
    return (
      <div className="max-w-lg mx-auto py-12 px-4 flex flex-col gap-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="max-w-lg mx-auto py-12 px-4 text-center text-red-600">
        Failed to load this post.
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}