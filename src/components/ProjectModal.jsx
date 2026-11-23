import { useEffect } from "react";
import { X, ExternalLink, Github, Lock } from "lucide-react";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Content */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl animate-reveal overflow-y-auto rounded-3xl border border-rule bg-white p-6 shadow-lift sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-rule pb-4">
          <div>
            <span className="mb-2 inline-block rounded-full border border-rule bg-soft px-3 py-1 text-xs font-semibold text-ink">
              {project.badge || "Project"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-rule bg-soft text-dim transition hover:bg-brand/20 hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Image Preview if available */}
        {project.image && (
          <div className="mt-5 flex items-center justify-center overflow-hidden rounded-2xl border border-rule bg-soft p-6">
            <img
              src={project.image}
              alt={project.name}
              className="max-h-60 w-auto object-contain rounded-xl"
            />
          </div>
        )}

        {/* Description */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-soft mb-2">
            Overview & Architecture
          </h4>
          <p className="text-base leading-relaxed text-ink-soft">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        {project.tags && project.tags.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-soft mb-2.5">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-rule bg-soft px-3 py-1.5 text-xs font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-rule pt-6">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-white shadow-card transition hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" /> Visit Live Platform
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-soft px-4 py-2 text-xs font-medium text-dim">
              <Lock className="h-3.5 w-3.5" /> Internal Codebase
            </span>
          )}

          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-white px-5 py-2.5 text-xs font-semibold text-ink transition hover:bg-brand/20"
            >
              <Github className="h-4 w-4" /> GitHub Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
