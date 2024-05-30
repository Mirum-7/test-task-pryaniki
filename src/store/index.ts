import { configureStore } from '@reduxjs/toolkit';
import tableApi from './slices/table';

const store = configureStore({
  reducer: {
    [tableApi.reducerPath]: tableApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(tableApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
