import { configureStore } from '@reduxjs/toolkit';
import PostStore from './PostStore';
import UserStore from './UserStore';
import Theme from './Theme';

const store = configureStore({
  reducer: {
    posts: PostStore,
    users: UserStore,
    theme: Theme,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
