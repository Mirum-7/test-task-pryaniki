import { configureStore } from '@reduxjs/toolkit';
import tableApi from './slices/table';

const store = configureStore({
  reducer: {
    [tableApi.reducerPath]: tableApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(tableApi.middleware),
})

export default store;
