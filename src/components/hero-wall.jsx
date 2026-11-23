export function HeroWall() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, color-mix(in oklab, var(--t-fg) 5%, transparent), transparent 72%)",
        }}
      />
    </div>
  );
}