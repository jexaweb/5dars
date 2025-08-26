import { Children } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Mainlayouts from "./layouts/Mainlayouts";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";

import { action as RegisterAction } from "./pages/Login";

function App() {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <Mainlayouts />
        </ProtectedRoutes>
      ),
      Children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
      action: RegisterAction,
    },
    {
      path: "/register",
      element: <Register />,
      action: RegisterAction,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
