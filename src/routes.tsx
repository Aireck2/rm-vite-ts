import { lazy } from "react";
import { RouteObject } from "react-router";

import { PublicRoutes } from "@/models";

import { NotFound } from "./pages/Error";
import { Root } from "./pages/Root";

const Home = lazy(() => import("./pages/Home/Home"));
const Characters = lazy(() => import("./pages/Characters/Characters"));
const Episodes = lazy(() => import("./pages/Episodes/Episodes"));
const Locations = lazy(() => import("./pages/Locations/Locations"));
const CharacterDetail = lazy(
  () => import("./pages/Characters/CharacterDetail")
);
const EpisodeDetail = lazy(() => import("./pages/Episodes/EpisodeDetail"));
const LocationDetail = lazy(() => import("./pages/Locations/LocationDetail"));

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
        path: PublicRoutes.CHARACTER_DETAIL,
        element: <CharacterDetail />,
      },
      {
        path: PublicRoutes.LOCATIONS,
        element: <Locations />,
      },
      {
        path: PublicRoutes.LOCATIONS_DETAIL,
        element: <LocationDetail />,
      },
      {
        path: PublicRoutes.EPISODES,
        element: <Episodes />,
      },
      {
        path: PublicRoutes.EPISODES_DETAIL,
        element: <EpisodeDetail />,
      },
    ],
  },
];
