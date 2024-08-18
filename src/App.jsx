import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Landingpage from "./pages/Landingpage";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="w-[90%] mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
