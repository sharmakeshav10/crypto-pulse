import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import ScrollToTopButton from "../components/common/ScrollToTopButton";

const AppLayout = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Header />
      <ScrollToTopButton />
      <Outlet />
    </div>
  );
};

export default AppLayout;
