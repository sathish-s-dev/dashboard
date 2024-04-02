import { stats } from "../../../constants";
import { StatCard } from "./StatCard";

export function StatCardSection() {
  return (
    <section className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <StatCard image={stat.image} />
      ))}
    </section>
  );
}
