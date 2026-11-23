import { KeyRound, MonitorSmartphone } from "lucide-react";
import { Container, Eyebrow, Heading, HeadingAccent, SectionLead } from "./ui";
import { SKILL_CATEGORIES } from "../lib/data";

const FALLBACK_ICONS = {
  "Responsive UI": MonitorSmartphone,
  "JWT Auth": KeyRound,
};

function SkillMark({ skill }) {
  const Fallback = FALLBACK_ICONS[skill.name];
  if (!skill.image && Fallback) {
    return <Fallback className="size-7 text-ink" strokeWidth={1.75} aria-hidden />;
  }

  return (
    <img
      src={skill.image}
      alt=""
      className="size-7 object-contain"
      onError={(e) => {
        e.currentTarget.replaceWith(Object.assign(document.createElement("span"), {
          className: "text-[0.65rem] font-bold text-ink",
          textContent: skill.name.slice(0, 2).toUpperCase(),
        }));
      }}
    />
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="rounded-[var(--r)] bg-white p-[clamp(1.5rem,4vw,3.5rem)] shadow-card"
    >
      <Container className="!px-0">
        <div className="mb-10 flex flex-col gap-4 lg:mb-12">
          <Eyebrow className="text-dim">Technical Arsenal</Eyebrow>
          <Heading id="skills-title">
            Skills, frameworks <HeadingAccent>& tooling.</HeadingAccent>
          </Heading>
          <SectionLead>
            Frontend, backend, and Web3 stack for production apps, agentic AI tooling, and design systems.
          </SectionLead>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className={`reveal flex flex-col rounded-[1.35rem] border border-rule bg-white p-5 shadow-card sm:p-6 ${
                index >= 3 ? "xl:col-span-3" : "xl:col-span-2"
              }`}
            >
              <h3 className="border-b border-rule pb-3 text-base font-bold tracking-tight text-ink sm:text-lg">
                {category.title}
              </h3>

              <ul className="mt-4 grid grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex min-h-[5.25rem] flex-col items-center justify-center gap-2 rounded-2xl border border-rule px-2 py-3 text-center transition hover:-translate-y-0.5 hover:border-brand hover:shadow-card"
                  >
                    <span className="flex size-8 items-center justify-center">
                      <SkillMark skill={skill} />
                    </span>
                    <span className="text-[0.8125rem] font-semibold leading-tight text-balance text-ink">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
