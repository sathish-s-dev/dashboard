import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { SideNavbar } from "./components/SideNavBar";

const Layout = () => {
  return (
    <ConfigProvider>
      <div className="grid md:grid-cols-[250px_1fr] bg-light h-screen">
        <div className="hidden md:block h-full">
          <SideNavbar />
        </div>
        <Outlet />
      </div>
    </ConfigProvider>
  );
};

export default Layout;




