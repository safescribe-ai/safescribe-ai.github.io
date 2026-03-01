import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Accessibility from "./pages/Accessibility";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/get-started",
    Component: GetStarted,
  },
  {
    path: "/accessibility",
    Component: Accessibility,
  },
]);
