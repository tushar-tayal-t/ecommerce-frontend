import { create } from "zustand";

interface RecentPostsState {
  recentIds: number[];
  addRecent: (id: number) => void;
}

export const useRecentPostsStore = create<RecentPostsState>((set) => ({
  recentIds: [],
  addRecent: (id) =>
    set((state) => {
      const filtered = state.recentIds.filter((existingId) => existingId !== id);
      return { recentIds: [id, ...filtered].slice(0, 5) }; // keep last 5, no duplicates
    }),
}));