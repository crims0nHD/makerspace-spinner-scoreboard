import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Root from './sites/root/Root';
import Scoreboard from './sites/scoreboard/Scoreboard';
import Interaction from './sites/interaction/Interaction';
import Admin from './sites/admin/Admin';
import Login from './sites/login/Login';
import Tutorial from './sites/tutorial/Tutorial';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/scoreboard",
    element: <Scoreboard />,
  },
  {
    path: "/interaction",
    element: <Interaction />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/tutorial",
    element: <Tutorial />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
