import { createSlice } from '@reduxjs/toolkit';
import { postsInitialState } from './posts.initial';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    addPost: (state, { payload }) => ({ posts: [payload, ...state.posts] }),
  },
  extraReducers: (builder) => {},
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
