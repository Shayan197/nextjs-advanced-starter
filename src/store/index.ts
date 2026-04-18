import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/store/api/apiSlice';
import counterSlice from '@/store/slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
