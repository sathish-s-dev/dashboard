import { MailOutlined, ProductOutlined, MoneyCollectOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <ConfigProvider>
      <div className="grid md:grid-cols-[250px_1fr] bg-light h-screen ">
        <SideNavbar />
        <Outlet />
      </div>
    </ConfigProvider>
  );
};

export default Layout;

type MenuItem = {
  key: string;
  label: string;
  icon?: ReactNode;
};

function SideNavbar() {
  const items: MenuItem[] = [
    {
      key: "/",
      label: "Dashboard",
      icon: <SettingOutlined />,
    },
    {
      key: "/products",
      label: "Products",
      icon: <ProductOutlined />,
    },
    {
      key: "/customers",
      label: "Customers",
      icon: <UserOutlined />,
    },
    {
      key: "/income",
      label: "Income",
      icon: <MoneyCollectOutlined />,
    },
    {
      key: "/promote",
      label: "Promote",
      icon: <MailOutlined />,
    },
  ];

  return (
    <aside className="bg-accent text-white md:block hidden">
      <Link
        to="/"
        className="text-2xl font-semibold flex items-center gap-2 p-6"
      >
        <img src="/hexagon.svg" className="invert" alt="hexagon-icon" />
        Dashboard
      </Link>
      <Menu items={items} />
    </aside>
  );
}

function Menu({ items }: { items: MenuItem[] }) {
  if (!items) {
    return null;
  }
  return (
    <nav>
      <ul className="space-y-2">
        {items.map((item) => {
          if (!item) {
            return null;
          }
          return (
            <li key={item.key}>
              <Link
                className=" px-6 py-2 hover:bg-light hover:text-accent transition duration-300 flex items-center gap-3"
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
