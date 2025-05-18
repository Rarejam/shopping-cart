import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { Shop } from './Shop';
import { Home } from './Home';
import { About } from './About';
import { Layout } from './Layout';
//npm install react-router-dom
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <RandomName /> */}
    {/* <Profile /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
