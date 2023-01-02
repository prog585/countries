import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavBar } from './components';
import { Home } from './views/home';
import { Detail } from './views/detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detail/:name',
    element: <Detail />
  }
]);
function App() {
  return (
    <>
      <NavBar></NavBar>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
