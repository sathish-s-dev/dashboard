import { ConfigProvider } from "antd";
import { Link, Outlet } from "react-router-dom";
import { MenuItem, navBarLinks } from "../constants";

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

export function SideNavbar() {
  return (
    <aside className="bg-accent text-white h-full">
      <Link
        to="/"
        className="text-2xl font-semibold flex items-center gap-2 p-6 mb-6"
      >
        <img src="/hexagon.svg" className="invert" alt="hexagon-icon" />
        Dashboard
      </Link>
      <Menu items={navBarLinks} />
    </aside>
  );
}

type MenuProps = { items: MenuItem[] };

function Menu({ items }: MenuProps) {
  if (!items) {
    return null;
  }
  return (
    <nav>
      <ul className="space-y-6">
        {items.map((item) => {
          if (!item) {
            return null;
          }
          return (
            <li key={item.key}>
              <Link
                className=" px-6 py-2 hover:bg-light focus:bg-light focus:text-accent hover:text-accent transition duration-300 flex items-center gap-3"
                to={item.key}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
