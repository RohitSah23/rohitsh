import { useState } from "react";
import { Container, Eyebrow, Heading, HeadingAccent, SectionLead } from "./ui";
import { Link } from "react-router";
import { ALL_PROJECTS, getProjectsForHome } from "../lib/data";
import { ExternalLink, Github, Lock, ArrowUpRight } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

export default function Projects({ fullCatalog = false }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useDocumentMetadata(
    fullCatalog
      ? {
          title: "Projects | KR ROHIT — Full Stack Developer",
          description:
            "Explore web applications, Web3 platforms, SaaS dashboards, and open source design systems built by KR ROHIT.",
          url: "https://www.rohitisog.com/projects",
          keywords:
            "Projects, Portfolio, React, Next.js, Web3, Tailwind CSS, Swing UI, LagomChain, Arbancia",
        }
      : {}
  );

  const homeProjects = getProjectsForHome();
  const items = fullCatalog ? ALL_PROJECTS : homeProjects;

  return (
    <section
      id="projects"
      className="overflow-hidden rounded-[var(--r)] bg-white p-[clamp(1.5rem,4vw,3.5rem)] shadow-card"
    >
      <Container className="!px-0">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <Eyebrow className="text-dim">{fullCatalog ? "Full catalog" : "Selected Works"}</Eyebrow>
            <Heading id="projects-title">
              {fullCatalog ? (
                <>
                  Crafted products <HeadingAccent>& platforms.</HeadingAccent>
                </>
              ) : (
                <>
                  Selected work <HeadingAccent>at a glance.</HeadingAccent>
                </>
              )}
            </Heading>
            {!fullCatalog && (
              <SectionLead>Shipped products across web, Web3, and studio builds.</SectionLead>
            )}
          </div>

          {!fullCatalog && (
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center gap-1.5 self-start rounded-full border-[1.5px] border-ink bg-white px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-card sm:self-end"
            >
              View all projects <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-rule bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lift sm:p-6"
            >
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="relative mb-5 flex h-40 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-rule bg-white p-4 transition group-hover:border-brand/40"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt=""
                      className="max-h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex size-16 items-center justify-center rounded-xl bg-brand text-lg font-bold text-ink">
                      {project.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <span className="absolute top-2.5 right-2.5 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-ink shadow-sm ring-1 ring-rule">
                    {project.badge}
                  </span>
                </button>

                <div className="flex items-start justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer text-left text-lg font-bold tracking-tight text-ink transition hover:text-brand sm:text-xl"
                  >
                    {project.name}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    title="View details"
                    className="shrink-0 cursor-pointer text-dim opacity-0 transition group-hover:opacity-100 hover:text-ink"
                  >
                    <ArrowUpRight className="size-4" aria-hidden />
                  </button>
                </div>

                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-dim sm:text-sm">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-rule bg-white px-2 py-0.5 text-[10px] font-medium text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-md border border-rule bg-white/60 px-1.5 py-0.5 text-[10px] font-medium text-dim">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-rule pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-ink transition hover:opacity-90"
                    >
                      <ExternalLink className="size-3" aria-hidden /> Live
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-white px-3 py-1.5 text-xs font-medium text-dim">
                      <Lock className="size-3" aria-hidden /> Internal
                    </span>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-ink bg-white px-3 py-1.5 text-xs font-semibold text-ink transition hover:bg-brand/20"
                    >
                      <Github className="size-3" aria-hidden /> Repo
                    </a>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer text-xs font-semibold text-dim transition hover:text-ink"
                >
                  Details →
                </button>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}