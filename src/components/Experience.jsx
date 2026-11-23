import { Container, Eyebrow, Heading } from "./ui";
import { EXPERIENCE_DATA } from "../lib/data";
import { ExternalLink, Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="overflow-hidden rounded-[var(--r)] bg-white p-[clamp(1.5rem,4vw,3.5rem)] shadow-card"
    >
      <Container className="!px-0">
        <div className="mb-10 flex flex-col gap-4 lg:mb-12">
          <Eyebrow className="text-dim">Career Journey</Eyebrow>
          <Heading id="experience-title">
            Professional experience{" "}
            <span className="inline-block rounded-full bg-brand px-[0.15em] pb-[0.04em]">& impact.</span>
          </Heading>
          <p className="max-w-[56ch] text-[17px] leading-relaxed text-dim">
            From architecting agentic AI and content automation at{" "}
            <a
              href="https://loudlabs.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-brand/60 underline-offset-2"
            >
              Loud Labs
            </a>{" "}
            to shipping full-stack products with React, Next.js, NestJS, and Web3 across startups
            and global remote teams.
          </p>
        </div>

        <div className="divide-y divide-rule">
          {EXPERIENCE_DATA.map((exp) => (
            <article key={exp.id} className="reveal py-8 first:pt-0 lg:py-10">
              <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_11.5rem] lg:gap-x-10 lg:gap-y-5">
                <div className="min-w-0 lg:col-span-2 lg:grid lg:grid-cols-[minmax(0,1fr)_11.5rem] lg:items-start lg:gap-x-10">
                  <div className="flex min-w-0 items-start gap-4">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt=""
                        className={`h-14 w-14 shrink-0 rounded-2xl border border-rule bg-white shadow-sm sm:h-16 sm:w-16 ${
                          exp.logoContain ? "object-contain p-2" : "object-cover p-1"
                        }`}
                      />
                    ) : (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-ink shadow-sm sm:h-16 sm:w-16">
                        <Briefcase className="h-6 w-6" aria-hidden />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 gap-y-1">
                        <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex max-w-full items-center gap-1.5 hover:opacity-80"
                            >
                              <span className="truncate">{exp.company}</span>
                              <ExternalLink className="h-4 w-4 shrink-0 text-dim" aria-hidden />
                            </a>
                          ) : (
                            exp.company
                          )}
                        </h3>
                        <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">
                          {exp.type}
                        </span>
                      </div>
                      <p className="mt-1 text-base font-semibold text-ink">{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-dim sm:text-sm lg:col-start-2 lg:row-start-1 lg:flex-col lg:items-end lg:gap-2 lg:text-right">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
                      <Calendar className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden />
                      {exp.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-dim" aria-hidden />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 space-y-6 sm:ml-[4.5rem] md:ml-[5rem] lg:col-span-2 lg:ml-[calc(4rem+2.5rem)]">
                  <ul className="space-y-3">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <p className="text-sm leading-relaxed text-dim sm:text-[15px]">{pt}</p>
                      </li>
                    ))}
                  </ul>

                  <p className="border-t border-rule pt-4 font-mono text-[0.8125rem] leading-relaxed text-dim">
                    <span className="font-semibold uppercase tracking-wider text-ink/80">
                      Stack{" "}
                    </span>
                    {exp.skills.join(" · ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}