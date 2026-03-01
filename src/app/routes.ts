import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/get-started",
    Component: GetStarted,
  },
]);
