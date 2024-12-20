import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const AppLayout = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
