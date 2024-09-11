import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Scoreboard from './scoreboard/Scoreboard';
import Interaction from './interaction/Interaction';
import "./index.css";
import Root from './root/Root';

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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
