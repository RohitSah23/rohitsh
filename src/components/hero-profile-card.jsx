import { SITE_BIO, SITE_METADATA, SOCIAL_LINKS } from "../lib/data";
import { SocialIcon } from "./social-icons";

/** Mirrors sarg-landing-page InstagramProfile — personal profile card. */
export function HeroProfileCard({ className = "" }) {
  return (
    <div className={`rounded-[var(--hero-r)] bg-white p-6 shadow-card sm:p-7 ${className}`}>
      <div className="flex items-center gap-5 sm:gap-6">
        <img
          src="/rohit.jpg"
          alt={SITE_METADATA.name}
          width={96}
          height={96}
          className="size-20 shrink-0 rounded-full object-cover ring-2 ring-brand ring-offset-2 sm:size-24"
        />
        <div className="min-w-0">
          <p className="truncate text-[1.375rem] font-bold tracking-[-0.02em] text-ink">
            {SITE_METADATA.name}
          </p>
          <p className="text-[0.9375rem] text-dim">{SITE_METADATA.role}</p>
          <p className="mt-1 text-[0.8125rem] text-dim">{SITE_METADATA.location}</p>
        </div>
      </div>

      <p className="mt-4 text-[0.9375rem] font-semibold leading-snug text-ink">
        {SITE_BIO.profileHeading}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.id}
            href={s.link}
            target={s.id === "email" ? undefined : "_blank"}
            rel={s.id === "email" ? undefined : "noreferrer noopener"}
            title={s.name}
            aria-label={s.name}
            className="inline-flex size-10 items-center justify-center rounded-full border border-rule bg-white text-ink transition hover:border-brand hover:bg-brand"
          >
            <SocialIcon id={s.id} className="size-[1.125rem]" />
          </a>
        ))}
      </div>
    </div>
  );
}
