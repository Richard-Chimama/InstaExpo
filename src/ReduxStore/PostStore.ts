import { createSlice } from "@reduxjs/toolkit";
import { postProp } from "../types";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    value: [] as postProp[],
  },
  reducers: {
    addPosts: (state, action) => {
      state.value = [...action.payload];
    },
    addPost: (state, action) => {},
    updateLike: (state, action) => {
      const post = state.value.find((item) => item.id === action.payload.id);
      if (post) {
        const existingLikeIndex = post.likes.findIndex((like) => like.user_id === action.payload.userId);
        if (existingLikeIndex !== -1) {
          post.likes.splice(existingLikeIndex, 1);
        } else {
          post.likes.push({
            id: action.payload.id,
            user_id: action.payload.userId,
          });
        }
      }
    },
    updateComment: (state, action) => {
      const post = state.value.find((item)=> item.id === action.payload.postId)
      if(post){
        let newComments = [...action.payload.comments]
        post.comment = newComments
      }
    },
  },
});

export const { addPosts, updateLike, updateComment, addPost } =
  postSlice.actions;

const postsReducer = postSlice.reducer;

export default postsReducer;
