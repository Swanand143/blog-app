import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/home/home';
import Blogview from './views/blogview/blogview';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/blog/:id",
    element: <Blogview/>
  }
])
root.render(<RouterProvider router={router}/>);
