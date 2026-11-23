import { ArrowRight, Download } from "lucide-react";
import { Eyebrow } from "./ui";
import { HeroProfileCard } from "./hero-profile-card";
import { SargFollowersCard } from "./sarg-followers-card";
import {
  SITE_METADATA,
  SITE_BIO,
  KEY_METRICS,
  resumePDF,
} from "../lib/data";

function HeroHighlight({ children }) {
  return (
    <mark className="inline-block rounded-full bg-brand px-[0.18em] pb-[0.05em] text-ink">
      {children}
    </mark>
  );
}

export default function Hero() {
  return (
    <section
      id="overview"
      style={{ "--hero-r": "clamp(1.75rem, 4vw, 2.5rem)" }}
      className="relative isolate overflow-hidden pb-4 sm:pb-6"
    >
      <div className="w-full">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(17.5rem,22.5rem)]">
          <div className="animate-reveal flex min-h-0 flex-col gap-6 rounded-[var(--hero-r)] bg-white p-[clamp(1.5rem,4vw,3.5rem)] shadow-card sm:gap-7 md:min-h-[32.5rem]">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pb-2 md:mb-auto">
              <span className="inline-flex min-h-9 items-center gap-2.5 rounded-full border border-rule bg-white px-4 text-[0.8125rem] font-semibold text-ink shadow-card">
                <span className="relative flex size-[0.5625rem]">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-full rounded-full bg-brand" />
                </span>
                Open to full-time &amp; contract · Remote
              </span>
              <Eyebrow className="text-dim">
                {SITE_METADATA.eyebrow}
              </Eyebrow>
            </div>

            <h1 className="text-balance text-[clamp(2.75rem,7.4vw,6.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink">
              Build. Ship. <HeroHighlight>Scale.</HeroHighlight>
            </h1>

            <p className="max-w-[38em] text-[clamp(1.0625rem,1.4vw,1.25rem)] font-medium leading-relaxed text-dim">
              Hi, I&apos;m{" "}
              <strong className="font-semibold text-ink">{SITE_METADATA.name}</strong>.{" "}
              {SITE_BIO.heroLead}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-card transition hover:opacity-90 sm:flex-none"
              >
                Explore Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={resumePDF}
                download="Rohit_Kumar_CV.pdf"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-rule bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand/20 sm:flex-none"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border-b-[1.5px] border-dim pb-0.5 text-sm font-semibold text-dim transition-opacity hover:opacity-70 sm:ml-1"
              >
                Let&apos;s talk ↗
              </a>
            </div>

          </div>

          <aside className="hidden flex-col gap-4 md:flex" aria-label="Profile and studio">
            <HeroProfileCard className="flex-1" />
            <SargFollowersCard />
          </aside>
        </div>

        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <HeroProfileCard />
          <SargFollowersCard />
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 rounded-[var(--hero-r)] bg-white px-[clamp(1.5rem,4vw,3.5rem)] py-7 shadow-card sm:grid-cols-4 sm:gap-y-4 lg:flex lg:justify-between lg:gap-x-10">
          {KEY_METRICS.map((metric) => (
            <div key={metric.label} className="min-w-[7rem]">
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-wider text-dim">
                {metric.label}
              </dt>
              <dd className="mt-1 text-[1.875rem] font-semibold leading-none tracking-[-0.05em] text-ink lg:text-[2.25rem]">
                {metric.value}
              </dd>
              <p className="mt-1 text-xs text-dim">{metric.sub}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}