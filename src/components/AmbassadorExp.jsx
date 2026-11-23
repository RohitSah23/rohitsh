const ambassadorData = [
  {
    id: 1,
    company: "Spheron Foundation",
    role: "Ambassador (Officer Level - 2)",
    date: "Dec 2024 - May 2025",
    description:
      "Advocating Spheron's decentralized compute and storage infrastructure, fostering global developer communities, and creating technical educational materials.",
  },
];

export default function AmbassadorExp() {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-ink">Ambassador Experience</h3>
      <div className="mt-4 space-y-4">
        {ambassadorData.map((item) => (
          <div key={item.id} className="border-t border-line pt-3">
            <h4 className="font-semibold text-ink">{item.company}</h4>
            <p className="text-xs text-ink-soft">{item.role} · {item.date}</p>
            <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
