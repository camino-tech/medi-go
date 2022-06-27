import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';
import patientReducer from '../features/patients/patientSlice';
import statusReducer from '../features/status/statusSlice'

// the store is at the top level of a project and holds the global state.
// you will only want to pass reducers here
export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    patients: patientReducer,
    status: statusReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
