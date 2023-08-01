import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../const/const';
import { MovieResponse } from '../types/types';

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchPopularMovies: build.query<MovieResponse, string>({
      query: () => ({
        url: '/movie/popular',
      }),
    }),
  }),
});

export const {useFetchPopularMoviesQuery} = movieAPI;
