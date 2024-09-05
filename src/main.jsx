import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Store from './Pages/Store.jsx';
import StoreDetails from './Pages/StoreDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  }, 
  {
    path: "/signup",
    element: <Signup/>,
  }, 
  {
    path: "/store",
    element: <Store/>,
  },
  {
    path:"/courses/:courseId",
    element: <StoreDetails/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
