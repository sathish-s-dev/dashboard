import { Input } from "antd";


export function TopSection() {
  return (
    <div className="w-full flex justify-between items-center">
      <h3 className="flex-1">Hello Sharuk</h3>
      <Input className="w-full max-w-[200px]" placeholder="Search" />
    </div>
  );
}