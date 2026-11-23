import { ArrowRight, ExternalLink } from "lucide-react";
import { Container, Eyebrow } from "./ui";
import { TONES, SPOTLIGHT_PROJECTS, toneStyle } from "../lib/data";

export default function RecentWork() {
  return (
    <section
      id="recent-work"
      style={toneStyle(TONES.projects)}
      className="tone overflow-hidden py-20"
    >
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow className="text-(--t-mute)">
              Featured Deployments
            </Eyebrow>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl mt-1">
              Recent Highlights
            </h2>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-(--t-acc) hover:underline self-start sm:self-end"
          >
            Browse all works <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SPOTLIGHT_PROJECTS.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-(--t-line) bg-white/80 p-6 shadow-sm transition hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-14 w-14 shrink-0 rounded-2xl object-cover border border-(--t-line)"
                    />
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-(--t-acc) text-xl font-bold text-white">
                      {item.title.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-(--t-acc)">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-(--t-mute)">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-(--t-line) pt-4">
                <span className="text-xs font-semibold text-(--t-mute)">
                  {item.metrics}
                </span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--t-acc) hover:underline"
                  >
                    View Project <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
