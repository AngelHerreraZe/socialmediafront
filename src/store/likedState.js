import { create } from "zustand";

const useLikeStore = create((set) => ({
  likeStatus: false,
  postId: null,
  changeLikeStatus: (newPostId) => set((state) => ({
    likeStatus: !state.likeStatus,
    postId: newPostId !== undefined ? newPostId : state.postId
  })),
  updateLikeStatus: (newStatus, newPostId) => set({
    likeStatus: newStatus,
    postId: newPostId !== undefined ? newPostId : state.postId
  }),
}));

export default useLikeStore;