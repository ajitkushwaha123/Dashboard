import BarCharts from "@/charts/BarCharts";
import Stats from "@/components/common/Stats";
import { statsData } from "@/constants/index";
import RecentOrders from "@/components/RecentOrders";
import DiscountChart from "@/charts/DiscountChart";
import PaymentTypeChart from "@/charts/PaymentTypeChart";
import ChartTemplate from "@/components/common/ChartTemplate";

export default function Home() {
  return (
    <main>
      <div className="flex w-full">
        {statsData.map((data, index) => (
          <div
            className={`w-[25%] my-5 ${index !== statsData.length - 1 ? "ml-7" : "mx-7"}`}
          >
            <Stats
              key={index}
              title={data.title}
              amount={data.amount}
              orders={data.orders}
              percentage={data.percentage}
              icon={data.icon}
              bgColor={data.bgColor}
            />
          </div>
        ))}
      </div>

      <div className="flex w-[100%] justify-start items-start">
        <div className="w-[64%]">
          <div className="p-5 h-[400px] my-4 rounded-xl mx-7 bg-white">
            <BarCharts />
          </div>
          <div className="flex my-10 px-6">
            <div className="w-[50%] h-[400px] rounded-xl p-5 bg-white">
              <ChartTemplate title={"Discount"} graph={<DiscountChart />} />
            </div>
            <div className="w-[50%] ml-5 h-[400px] rounded-xl p-5 bg-white">
              <ChartTemplate title={"Payment Type"} graph={<PaymentTypeChart />} />
            </div>
          </div>
        </div>
        <div className="w-[36%] mt-4 rounded-xl mr-7 bg-white">
          <RecentOrders />
        </div>
      </div>
    </main>
  );
}
