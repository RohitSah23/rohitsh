import useDocumentMetadata from "../hooks/useDocumentMetadata";
import { Eyebrow, Heading, HeadingAccent, SectionLead } from "./ui";
import { BookOpen, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export default function Blogs() {
  useDocumentMetadata({
    title: "Writing & Insights | KR ROHIT — Full Stack Developer",
    description:
      "Articles and engineering notes on modern frontend architectures, React, Next.js, and Web3 by KR ROHIT.",
    url: "https://www.rohitisog.com/blogs",
    keywords: "Blogs, Web Development, React, Next.js, TypeScript, Web3",
  });

  return (
    <section className="overflow-hidden rounded-[var(--r)] bg-white p-[clamp(1.5rem,4vw,3.5rem)] shadow-card">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-dim transition hover:text-ink"
      >
        <ArrowLeft className="size-4" aria-hidden /> Back to Home
      </Link>

      <div className="max-w-2xl">
        <Eyebrow className="text-dim">Writings & Thoughts</Eyebrow>
        <Heading className="mt-4">
          Technical insights <HeadingAccent>& notes.</HeadingAccent>
        </Heading>
        <SectionLead className="mt-4">
          Deep dives into frontend performance, component architecture, and smart contract integration.
          New articles publishing soon.
        </SectionLead>
      </div>

      <div className="mt-10 max-w-2xl rounded-2xl border border-rule bg-white p-8 text-center shadow-card sm:p-10">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-brand text-ink shadow-sm">
          <BookOpen className="size-7" aria-hidden />
        </div>
        <h3 className="text-xl font-bold text-ink">Articles in progress</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-dim">
          Technical breakdowns on Next.js performance, Web3 wallet UX, and accessible design systems are
          on the way.
        </p>
        <Link
          to="/#contact"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-[1.5px] border-ink bg-white px-6 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-card"
        >
          Get notified via email
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}