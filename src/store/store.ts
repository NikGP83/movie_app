import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { movieAPI } from '../services/movie-service';

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
});

export const setupStore = () => {
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
