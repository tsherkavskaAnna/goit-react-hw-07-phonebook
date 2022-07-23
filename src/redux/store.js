import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './itemSlice';
import filterSlice from './filterSlice';


export const store = configureStore({
    reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
      filter: filterSlice,
    },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
    ],
  
  });

