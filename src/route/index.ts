import { RouteProps } from "react-router-dom";
import { Home, Add } from "pages";

export const routes: Array<RouteProps> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/add",
    component: Add,
  },
];
