import { Eyebrow } from "./ui";
import { SITE_METADATA, SARG_STUDIO_SOCIAL, resumePDF } from "../lib/data";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

export default function Closing() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="mt-4">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <BentoCard className="flex flex-col gap-7 p-[clamp(1.5rem,4vw,3.5rem)]">
          <Eyebrow className="text-dim">Let&apos;s Collaborate</Eyebrow>

          <h2
            id="closing-title"
            className="text-[clamp(2.25rem,5.4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-balance"
          >
            Let&apos;s build something{" "}
            <span className="inline-block rounded-full bg-brand px-[0.2em] pb-[0.05em]">together.</span>
          </h2>

          <p className="max-w-[44ch] text-base leading-relaxed text-dim">
            Available for full-time roles, engineering contracts, and high-impact AI, frontend,
            and Web3 builds.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:rohitisog@gmail.com"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email me
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand text-ink">
                <ArrowUpRight className="size-4" aria-hidden />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/rohitisog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://x.com/rohitisog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              X ↗
            </a>
            <a
              href={resumePDF}
              download="Rohit_Kumar_CV.pdf"
              className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              Resume ↗
            </a>
          </div>
        </BentoCard>

        <BentoCard className="flex flex-col items-center justify-center p-8 text-center sm:p-10">
          <img
            src="/rohit.jpg"
            alt=""
            width={96}
            height={96}
            className="mb-4 size-24 rounded-full border-4 border-white object-cover shadow-card ring-2 ring-brand"
          />
          <h3 className="text-xl font-bold tracking-tight text-ink">{SITE_METADATA.name}</h3>
          <p className="mt-2 max-w-[26ch] text-sm text-dim">{SITE_METADATA.role}</p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-rule bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-card">
            <span className="size-2 rounded-full bg-brand" />
            Open for opportunities
          </span>
        </BentoCard>
      </div>

      <footer className="mt-4 flex flex-col gap-4 rounded-[var(--r)] bg-white px-[clamp(1.5rem,4vw,3.5rem)] py-7 text-[13px] text-dim shadow-card sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} KR ROHIT. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={SARG_STUDIO_SOCIAL.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ink hover:underline"
          >
            sarg.live
          </a>
          <a
            href={SARG_STUDIO_SOCIAL.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-ink hover:underline"
          >
            <Instagram className="size-3.5" aria-hidden />
            @{SARG_STUDIO_SOCIAL.handle}
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            title="Back to top"
            className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-rule bg-white text-ink transition hover:bg-brand"
          >
            ↑
          </button>
        </div>
      </footer>
    </section>
  );
}

function BentoCard({ children, className = "" }) {
  return (
    <div
      className={`reveal rounded-[var(--r)] bg-white shadow-card ${className}`}
    >
      {children}
    </div>
  );
}