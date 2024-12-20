import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layout/AppLayout";

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
