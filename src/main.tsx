import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Projets from "./pages/Projets.tsx";
import Contacts from "./pages/Contacts.tsx";

import "./i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "projets",
        element: <Projets />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`La route utilisé n'est pas correcte`);
}

createRoot(rootElement).render(
  <StrictMode>
    <Suspense fallback={<p>Loading ...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
