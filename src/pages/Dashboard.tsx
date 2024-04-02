import { Select, Table, TableProps } from "antd";
import { useState } from "react";
import { TopSection } from "../components/TopSection";
import { ChartsSection } from "../components/dashboard/ChartsSection";
import { StatCardSection } from "../components/dashboard/StatsSection";
import SectionHeading from "../components/ui/SectionHeading";

const Dashboard = () => {
  return (
    <main className="bg-light p-6 md:px-12 py-6 space-y-8 h-screen overflow-y-auto">
      <TopSection />
      <StatCardSection />
      <ChartsSection />
      <TableSection />
    </main>
  );
};

export default Dashboard;

interface DataType {
  key: string;
  product: Product;
  stock: number;
  price: number;
  totalSales: number;
}

type Product = {
  image: string;
  name: string;
  description: string;
};

function TableSection() {
  const [timeSpan, setTimeSpan] = useState("Last 7 Days");

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Product Name",
      key: "name",
      dataIndex: "product",
      render: (_, product) => (
        <div className="flex items-center gap-4">
          <img
            className="w-28 rounded-lg h-16"
            src={product?.product.image}
            alt=""
            width={80}
            height={80}
          />
          <div>
            <h5 className="text-slate-800 font-bold capitalize">
              {product?.product.name}
            </h5>
            <p className="text-slate-400">{product?.product.description}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (text) => (
        <p className="text-slate-800 ">{text} in Stock</p>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <p className="text-slate-800 font-bold">$ {text}</p>,
    },
    {
      title: "Total Sales",
      dataIndex: "totalSales",
      key: "total-sales",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/abstract-glass.webp",
        name: "Abstract 3D",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
    {
      key: "2",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/abstract1.jpg ",
        name: "doller",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
    {
      key: "3",
      product: {
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolorem ducimus",
        image: "/images/abstract1.jpg",
        name: "balance",
      },
      stock: 32,
      price: 3.99,
      totalSales: 12,
    },
  ];
  return (
    <div className="w-full bg-white pb-24 p-6 rounded-xl space-y-6">
      <div className="flex gap-4 justify-between">
        <SectionHeading>Product Sell</SectionHeading>
        <Select
          value={timeSpan}
          onChange={(e) => setTimeSpan(e)}
          className="w-full max-w-32"
        >
          <Select.Option value="Last 7 Days">Last 7 Days</Select.Option>
          <Select.Option value="Last 30 Days">Last 30 Days</Select.Option>
          <Select.Option value="Last 60 Days">Last 60 Days</Select.Option>
        </Select>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
