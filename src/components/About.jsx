import { Eyebrow, Heading, HeadingAccent } from "./ui";
import { SITE_BIO, SITE_METADATA, resumePDF } from "../lib/data";
import { ArrowUpRight, Download } from "lucide-react";

function AboutPhoto({ className = "" }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[calc(var(--r)-0.5rem)] border border-rule shadow-card">
        <img
          src="/rohit.jpg"
          alt={SITE_METADATA.name}
          width={600}
          height={720}
          className="aspect-[5/6] w-full object-cover object-[center_15%]"
        />
      </div>
      <figcaption className="mt-3 text-[0.8125rem] font-medium text-dim">
        {SITE_METADATA.name} · New Delhi, India
      </figcaption>
    </figure>
  );
}

export default function About() {
  return (
    <section id="about" className="rounded-[var(--r)] bg-white p-[clamp(1.5rem,4vw,3.5rem)] shadow-card">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,18.75rem)] lg:gap-10">
        <div className="flex max-w-[52rem] flex-col gap-7">
          <Eyebrow className="text-dim">About KR ROHIT</Eyebrow>

          <Heading id="about-title">
            Builder across AI, web <HeadingAccent>& Web3.</HeadingAccent>
          </Heading>

          <AboutPhoto className="mx-auto max-w-[16rem] lg:hidden" />

          <div className="flex flex-col gap-4 text-base leading-relaxed text-dim sm:text-[17px]">
            <p>{SITE_BIO.intro}</p>
            <p>
              As an AI Strategist at{" "}
              <a
                href={SITE_BIO.loudLabsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-brand/50 underline-offset-2 hover:opacity-80"
              >
                Loud Labs
              </a>
              , {SITE_BIO.loudLabsBody}
            </p>
            <p>
              {SITE_BIO.engineering} {SITE_BIO.closer}
            </p>
          </div>

          <p className="text-[13px] leading-snug text-dim">
            {SITE_METADATA.role}
            <br />
            {SITE_METADATA.location}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumePDF}
              download="Rohit_Kumar_CV.pdf"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-card transition hover:opacity-90"
            >
              <Download className="size-4" aria-hidden />
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-[1.5px] border-ink bg-white px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-card"
            >
              Send an inquiry
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <AboutPhoto className="mx-auto hidden max-w-none lg:block" />
      </div>
    </section>
  );
}