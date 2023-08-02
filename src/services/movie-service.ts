/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../const/const';
import { Movies } from '../types/types';
import { object, number, array } from 'yup';

const headersOptions = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjc1YTYxMWY4NTAyMDk1ZDRkMTJkNmFiZDQxMmI5YSIsInN1YiI6IjY0Yzc3YzRlZWVjNWI1NThlYThiNTNmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8w2kgryJvBpI9BKgCpjb8kp2G55_R8_LyA1jk1QiNsM',
  accept: 'application/json',
};

const responseSchema = object({
  page: number(),
  results: array().required(),
  total_pages: number(),
  total_results: number(),
});

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchPopularMovies: build.query<Movies, string>({
      query: () => ({
        url: '/movie/popular',
        headers: headersOptions,
      }),
      transformResponse: (response: unknown) =>
        responseSchema.validateSync(response),
    }),
    fetchTrendingMovies: build.query<Movies, string>({
      query: () => ({
        url: '/trending/movie/day?language=en-US',
        headers: headersOptions,
      }),
      transformResponse: (response: unknown) =>
        responseSchema.validateSync(response),
    }),
  }),
});

export const { useFetchPopularMoviesQuery, useFetchTrendingMoviesQuery } =
  movieAPI;
