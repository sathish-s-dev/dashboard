import { Link } from "react-router-dom";
import { MenuItem, navBarLinks } from "../../constants";
import { DownOutlined } from "@ant-design/icons";

export function SideNavbar() {
  return (
    <aside className="bg-accent text-white h-full flex flex-col">
      <Link
        to="/"
        className="text-2xl font-semibold flex items-center gap-2 p-6 mb-6"
      >
        <img src="/hexagon.svg" alt="hexagon-icon" />
        Dashboard
      </Link>
      <Menu items={navBarLinks} />
      <div className="mt-auto w-full pb-6">
        <div className="flex items-center gap-3 p-3 bg-slate-50/5 backdrop-blur-lg border border-slate-400/20">
          <img
            src="/images/user.webp"
            alt="Evano"
            className="size-10 object-cover rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm">Evano</p>
            <p className="text-xs">Project Manager</p>
          </div>
          <DownOutlined size={12} className="text-slate-400 text-xs" />
        </div>
      </div>
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
