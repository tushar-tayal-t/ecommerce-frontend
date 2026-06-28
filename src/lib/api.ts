import { CreatePostInput, Post, UpdatePostInput } from "@/types/post";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/posts`);
  return handleResponse<Post[]>(response);
}

export async function getPost(id: number): Promise<Post> {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  return handleResponse<Post>(response);
}

export async function createPost(data: CreatePostInput): Promise<Post> {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse<Post>(response);
}

export async function updatePost(id: number, data: UpdatePostInput): Promise<Post> {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse<Post>(response);
}