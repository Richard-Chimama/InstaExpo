import {configureStore } from '@reduxjs/toolkit'
import PostStore from './PostStore'

const store = configureStore({
      reducer: {
            posts: PostStore
      }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;