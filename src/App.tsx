import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { Loading } from "@/components/basics";

import { routes } from "./routes";

const App: React.FC = () => {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
