import { createBrowserRouter, Navigate, RouterProvider, Outlet } from "react-router";
import Login from '../pages/Login'
import App from '../App'

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "*", element: <Navigate to="/" /> },
]);

const userRouter = createBrowserRouter([
  {
    path: "/", element: <App />
    ,
    children: [
      { path: "/", element: <p>Sidebar + Posts</p> },
      { path: "friends", element: <p> Friends Page</p> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function AppRouter() {
  const user = null;
  const finalRouter = user ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}

export default AppRouter;
