import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./section/Layout/Layout";
import Home from "./view/Home/Home";
import Dashboard from "./view/Dashboard/Dashboard";
import Settings from "./view/Settings/Settings";
import Services from "./view/Services/Services";
import Users from "./view/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
