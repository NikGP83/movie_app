import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../const/const';
import { MovieResponse } from '../types/types';

const headersOptions = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjc1YTYxMWY4NTAyMDk1ZDRkMTJkNmFiZDQxMmI5YSIsInN1YiI6IjY0Yzc3YzRlZWVjNWI1NThlYThiNTNmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8w2kgryJvBpI9BKgCpjb8kp2G55_R8_LyA1jk1QiNsM',
  accept: 'application/json',
};

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchPopularMovies: build.query<MovieResponse, string>({
      query: () => ({
        url: '/movie/popular',
        headers: headersOptions,
      }),
    }),
    fetchTrendingMovies: build.query<MovieResponse, string>({
      query: () => ({
        url: '/trending/movie/day?language=en-US',
        headers: headersOptions,
      }),
    }),
  }),
});

export const { useFetchPopularMoviesQuery, useFetchTrendingMoviesQuery } =
  movieAPI;
