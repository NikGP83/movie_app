import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { movieAPI } from '../services/movie-service';

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
