import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      }
    ]
  }
])

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
