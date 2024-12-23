import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layout/AppLayout";
import Compare from "./pages/Compare";
import CoinPage from "./pages/CoinPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landingpage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/coin/:id",
        element: <CoinPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
