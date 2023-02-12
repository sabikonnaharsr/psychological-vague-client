import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Login from "../components/Login/Login/Login";
import Registration from "../components/Login/Registration/Registration";
import Header from "../components/Shared/Header/Header";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

