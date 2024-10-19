import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Main from "../layouts/Main";

export const primaryRoute = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <Main/>
      }
    ]
  }
]);