import ReactECharts from "echarts-for-react";
import { barOptions } from "../../../constants/barOptions";
import { pieOption } from "../../../constants/pieOption";
import SectionHeading from "../ui/SectionHeading";

export function ChartsSection() {
  return (
    <section className="max-h-[350px] h-full grid md:grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="rouded md:col-span-1 rounded-xl gap-2 lg:col-span-2 bg-white border flex justify-center p-4 flex-col h-full">
        <div>
          <SectionHeading className="text-xl text-gray-900 font-bold pb-1">
            Overview
          </SectionHeading>
          <p className="text-slate-400 text-sm">Monthly Earning</p>
        </div>
        <div className="w-full h-full min-h-[200px]">
          <ReactECharts
            style={{ width: "100%", height: "100%", maxHeight: "250px" }}
            option={barOptions}
          />
        </div>
      </div>
      <div className="border h-full bg-white overflow-clip gap-2 rounded-xl p-6 pb-0">
        <div>
          <SectionHeading className="text-xl text-gray-900 font-bold pb-1">
            Customers
          </SectionHeading>
          <p className="text-slate-400 text-sm">Customer that buy products</p>
        </div>
        <div className="w-full min-h-[200px] h-full">
          <ReactECharts
            style={{ width: "100%", height: "100%", maxHeight: "250px" }}
            option={pieOption}
          />
        </div>
      </div>
    </section>
  );
}
