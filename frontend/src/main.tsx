import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Scoreboard from './scoreboard/Scoreboard';
import Interaction from './interaction/Interaction';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/scoreboard",
    element: <Scoreboard />,
  },
  {
    path: "/usermanagement",
    element: <Interaction />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
