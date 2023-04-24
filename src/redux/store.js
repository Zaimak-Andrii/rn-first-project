import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/auth.slice';
import PostsReducer from './posts/posts.slice';

export default configureStore({
  reducer: {
    auth: AuthReducer,
    posts: PostsReducer,
  },
});
