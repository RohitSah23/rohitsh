import { Link2 } from "lucide-react";
import { SARG_STUDIO_SOCIAL } from "../lib/data";

/** Matches sarg-landing-page `InstagramProfile` — no soft-grey stat panels. */
export function SargFollowersCard({ className = "" }) {
  const { handle, profileName, bio, websiteUrl, websiteLabel, instagramUrl, logo } =
    SARG_STUDIO_SOCIAL;

  const url = instagramUrl;
  const stats = [
    [SARG_STUDIO_SOCIAL.posts, "posts"],
    [SARG_STUDIO_SOCIAL.followers, "followers"],
    [SARG_STUDIO_SOCIAL.following, "following"],
  ];

  return (
    <div className={`rounded-[var(--hero-r)] bg-white p-6 shadow-card sm:p-7 ${className}`}>
      <div className="flex items-center gap-5 sm:gap-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
          aria-label={`@${handle} on Instagram`}
        >
          <img
            src={logo}
            alt=""
            width={96}
            height={96}
            className="size-20 rounded-full object-cover ring-2 ring-brand ring-offset-2 sm:size-24"
          />
        </a>
        <div className="min-w-0">
          <p className="truncate text-[1.375rem] font-bold tracking-[-0.02em] text-ink">{handle}</p>
          <p className="text-[0.9375rem] text-dim">{profileName}</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem]">
            {stats.map(([n, label]) => (
              <li key={label}>
                <strong className="font-semibold text-ink">{n}</strong>{" "}
                <span className="text-dim">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-4 text-[0.9375rem] text-ink">{bio}</p>
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-ink hover:underline"
      >
        <Link2 aria-hidden className="size-4 -rotate-45" />
        {websiteLabel}
      </a>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex h-14 w-full items-center justify-center rounded-full border-[1.5px] border-ink bg-white text-base font-semibold text-ink shadow-[inset_0_0_0_0] transition hover:-translate-y-0.5"
      >
        Follow @{handle} ↗
      </a>
    </div>
  );
}