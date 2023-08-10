export const API_ENDPOINTS = {
  baseUrl: 'https://api.themoviedb.org/3',
  trendingMovies: '/trending/movie/day?language=en-US',
  popularMovies: '/movie/popular',
  upcomingMovies: '/movie/upcoming',
  topRatedMovies: 'movie/top_rated',
  nowPlayingMovies: '/movie/now_playing',
  popularActorsList: '/person/popular',
} as const;


export const APP_ROUTES = {
  home: '/',
  actorsList: 'actors-list',
  actorsProfile: 'actors-room',
  movieRoom: 'movie-room',
} as const;

export const framerMotionAnimateSettings = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.09,
    },
  }),
  hidden: { opacity: 0.0 },
};

