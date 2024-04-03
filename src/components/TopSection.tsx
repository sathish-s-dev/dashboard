import { Input, Drawer } from "antd";
import { CompressOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { SideNavbar } from "./SideNavBar";

export function TopSection() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="w-full flex justify-between items-center gap-4 top-0 backdrop-blur-lg z-10 ">
      <button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        className="ring-none ring-slate-300 block md:hidden"
      >
        <MenuOutlined />
      </button>
      <Drawer
        open={collapsed}
        onClose={() => setCollapsed(false)}
        placement="left"
        closeIcon={<CompressOutlined />}
        className="!bg-accent !p-0 max-w-[250px]"
        width={250}
        onClick={() => setCollapsed(false)}
        styles={{
          header: {
            display: "none",
          },
          body: {
            padding: 0,
          },
        }}
      >
        <SideNavbar />
      </Drawer>
      <h3 className="flex-1 text-lg whitespace-nowrap font-semibold">
        Hello Sharuk 👋🏻,
      </h3>
      <Input className="w-full max-w-[200px]" placeholder="Search" />
    </div>
  );
}
