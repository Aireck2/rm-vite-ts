import { RouteObject } from "react-router";

import { PublicRoutes } from "@/models";
import { lazy } from "react";
import { NotFound } from "./pages/Error";
import { Root } from "./pages/Root";

const Home = lazy(() => import("./pages/Home/Home"));
const Characters = lazy(() => import("./pages/Characters/Characters"));
const Episodes = lazy(() => import("./pages/Episodes/Episodes"));
const Locations = lazy(() => import("./pages/Locations/Locations"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: PublicRoutes.HOME,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: PublicRoutes.CHARACTERS,
        element: <Characters />,
      },
      {
        path: PublicRoutes.LOCATIONS,
        element: <Locations />,
      },
      {
        path: PublicRoutes.EPISODES,
        element: <Episodes />,
      },
    ],
  },
];
