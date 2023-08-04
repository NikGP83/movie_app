export const API_ENDPOINTS = {
  baseUrl: 'https://api.themoviedb.org/3',
  trendingMovies: '/trending/movie/day?language=en-US',
  popularMovies: '/movie/popular',
  upcomingMovies: '/movie/upcoming',
  topRatedMovies: 'movie/top_rated',
  nowPlayingMovies: '/movie/now_playing',
  trendingActorsList: 'trending/person/day?language=en-US',
} as const;


export const APP_ROUTES = {
  home: '/',
  actorsList: 'actors-List',
  movieRoom: 'movie-room',
} as const;
