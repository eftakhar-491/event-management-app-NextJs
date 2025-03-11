import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice"; // Import the auth reducer

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth reducer to the store
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
