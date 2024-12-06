import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import PageAPropos from "./pages/PageAPropos";
import PageContact from "./pages/PageContact";
import PageProjet from "./pages/PageProjet";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageProjet />,
      },
      {
        path: "/projets",
        element: <PageProjet />,
      },
      {
        path: "/contacts",
        element: <PageContact />,
      },
      {
        path: "/a-propos",
        element: <PageAPropos />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
