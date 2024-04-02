export function StatCard({ image }: { image: string }) {
  return (
    <div className="bg-white p-4 flex items-center gap-2 sm:gap-4 rounded-lg">
      <img className="size-16 sm:size-[80px] md:size-[100px] contrast-[1.1] brightness-105" src={image} alt="" />
      <div>
        <h5 className="text-xs text-gray-400">Earning</h5>
        <h3 className="text-2xl font-bold">$198k</h3>
        <p className="text-[10px]">37% this month</p>
      </div>
    </div>
  );
}
