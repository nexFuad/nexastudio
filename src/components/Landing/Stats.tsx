const stats = [
  { value: "40+", label: "digital launches" },
  { value: "8 yrs", label: "creative experience" },
  { value: "12", label: "industries supported" },
  { value: "100%", label: "tailored collaborations" },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l border-[#b8d3c8] pl-4">
            <p className="text-2xl font-semibold tracking-tight text-[#28564f] sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
