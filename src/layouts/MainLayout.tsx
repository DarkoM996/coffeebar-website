import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";

const MainLayout = () => {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
