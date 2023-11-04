import {configureStore } from '@reduxjs/toolkit'
import PostStore from './PostStore'
import UserStore from './UserStore'

const store = configureStore({
      reducer: {
            posts: PostStore,
            users: UserStore
      }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;