import { Container, Eyebrow, Heading, HeadingAccent, SectionLead } from "./ui";
import { EDUCATION_DATA } from "../lib/data";
import Certifications from "./Certifications";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="overflow-hidden rounded-[var(--r)] bg-white p-[clamp(1.5rem,4vw,3.5rem)] shadow-card"
    >
      <Container className="!px-0">
        <div className="mb-10 flex flex-col gap-4 lg:mb-12">
          <Eyebrow className="text-dim">Academic Background</Eyebrow>
          <Heading id="education-title">
            Education <HeadingAccent>& foundation.</HeadingAccent>
          </Heading>
          <SectionLead>
            Formal computer science training backing real-world software engineering practice.
          </SectionLead>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {EDUCATION_DATA.map((edu) => (
            <article
              key={edu.id}
              className="reveal flex flex-col justify-between rounded-2xl border border-rule bg-white p-5 shadow-card sm:p-6"
            >
              <div className="flex items-start gap-4">
                {edu.logo ? (
                  <img
                    src={edu.logo}
                    alt=""
                    className="size-12 shrink-0 rounded-xl border border-rule bg-white object-cover p-1"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand text-ink">
                    <GraduationCap className="size-6" aria-hidden />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand">
                    <Calendar className="size-3" aria-hidden />
                    {edu.date}
                  </span>
                  <h3 className="mt-0.5 text-base font-bold text-ink sm:text-lg">{edu.college}</h3>
                  <p className="mt-1 text-xs font-medium text-dim sm:text-sm">{edu.degree}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-rule pt-4">
                <span className="text-xs font-semibold text-dim">Academic performance</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-white px-3 py-1 text-xs font-bold text-ink">
                  <Award className="size-3.5 text-brand" aria-hidden />
                  {edu.score}
                </span>
              </div>
            </article>
          ))}
        </div>

        <Certifications />
      </Container>
    </section>
  );
}