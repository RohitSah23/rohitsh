import { Eyebrow } from "./ui";
import { CERTIFICATIONS } from "../lib/data";
import { Award, Calendar, MapPin, CheckCircle2, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <div className="reveal mt-12 border-t border-rule pt-12 lg:mt-16 lg:pt-16">
      <div className="mb-8 flex flex-col gap-3">
        <Eyebrow className="text-dim">Accreditation</Eyebrow>
        <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Certifications <span className="inline-block rounded-full bg-brand px-[0.12em] pb-[0.03em]">& credentials</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:gap-6">
        {CERTIFICATIONS.map((cert) => (
          <article
            key={cert.id}
            className="flex flex-col justify-between rounded-2xl border border-rule bg-white p-5 shadow-card sm:p-7"
          >
            <div>
              <div className="flex flex-col gap-4 border-b border-rule pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt=""
                      className={`size-12 shrink-0 rounded-xl border border-rule object-cover ${
                        cert.logoDark ? "bg-ink" : "bg-white p-1"
                      }`}
                    />
                  ) : (
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-ink">
                      <Award className="size-6" aria-hidden />
                    </div>
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-ink sm:text-xl">{cert.title}</h4>
                      <span className="rounded-full border border-rule bg-white px-2.5 py-0.5 text-[10px] font-semibold text-dim">
                        Credential
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-ink">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-dim sm:text-sm">
                  <span className="inline-flex items-center gap-1 font-semibold text-ink">
                    <Calendar className="size-3.5 text-brand" aria-hidden />
                    {cert.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" aria-hidden />
                    {cert.location}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {cert.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                    <p className="text-sm leading-relaxed text-dim">{pt}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-rule pt-4">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-rule bg-white px-2.5 py-0.5 text-[10px] font-semibold text-ink"
                >
                  {s}
                </span>
              ))}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-ink px-3 py-1 text-xs font-semibold text-ink transition hover:bg-brand"
                >
                  Show credential
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}