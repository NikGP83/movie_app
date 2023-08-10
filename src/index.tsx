import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ActorsList from './components/actors-list/actors-list';
import MovieRoom from './components/movie-room/movie-room';
import { APP_ROUTES } from './const/const';
import ActorsRoom from './components/actors-room/actors-room';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: APP_ROUTES.actorsList,
    element: <ActorsList />,
  },
  {
    path: `${APP_ROUTES.movieRoom}/:id?`,
    element: <MovieRoom />,
  },
  {
    path: `${APP_ROUTES.actorsList}`,
    element: <ActorsList />,
  },
  {
    path: `${APP_ROUTES.actorsProfile}/:id?`,
    element: <ActorsRoom />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
