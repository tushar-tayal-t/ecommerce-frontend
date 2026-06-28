"use client";

import Link from "next/link";
import { usePosts } from "@/hooks/posts/usePosts";
import { Skeleton } from "@/components/ui/skeleton";

export default function PostsPage() {
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 flex flex-col gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-20 w-full" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center text-red-600">
        Failed to load posts.
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center text-gray-500">
        No posts found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.id}`}
          className="block border rounded-lg p-4 mb-3 hover:bg-gray-50 transition-colors"
        >
          <h2 className="font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.body}</p>
        </Link>
      ))}
    </div>
  );
}