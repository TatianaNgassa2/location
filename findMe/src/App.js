import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Profile from "./pages/profile/Profile";
import Activite from "./pages/activite/activite";

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      path: "/",
      // child route components
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        // other pages....
        {
          path: "/activite",
          element: <Activite />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
