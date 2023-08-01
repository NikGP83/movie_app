import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
