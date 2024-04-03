import { TopSection } from "../components/TopSection";
import { ChartsSection } from "../components/dashboard/ChartsSection";
import { StatCardSection } from "../components/dashboard/StatsSection";
import { TableSection } from "../components/dashboard/TableSection";

const Dashboard = () => {
  return (
    <main className="bg-light p-6 md:px-12 py-6 space-y-6 md:space-y-8 h-screen overflow-y-auto no-scrollbar relative">
      <TopSection />
      <StatCardSection />
      <ChartsSection />
      <TableSection />
    </main>
  );
};

export default Dashboard;
