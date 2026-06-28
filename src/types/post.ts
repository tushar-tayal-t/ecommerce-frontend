export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type CreatePostInput = Omit<Post, "id">;
export type UpdatePostInput = Partial<CreatePostInput>;