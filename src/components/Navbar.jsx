import { useRef, useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, Download, Menu } from "lucide-react";
import { SITE_METADATA, resumePDF } from "../lib/data";

const navLinks = [
  { href: "#overview", id: "overview", label: "Overview" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#about", id: "about", label: "About" },
  { href: "#contact", id: "contact", label: "Contact" },
];

function ArrowChip() {
  return (
    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
      <ArrowUpRight className="size-[1.125rem]" aria-hidden />
    </span>
  );
}

export default function Navbar({ onOpenShare }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const pending = useRef(null);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.dataset.menuOpen = "true";
      document.body.style.overflow = "hidden";
    } else {
      delete document.documentElement.dataset.menuOpen;
      document.body.style.overflow = "";
    }
    return () => {
      delete document.documentElement.dataset.menuOpen;
      document.body.style.overflow = "";
    };
  }, [open]);

  function jump(e, href) {
    e.preventDefault();
    if (!onHome) return;
    pending.current = href;
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      const href = pending.current;
      if (!href || !onHome) return;
      pending.current = null;
      requestAnimationFrame(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", href);
      });
    }
  }, [open, onHome]);

  const handleNavClick = (e, href) => {
    if (!onHome) return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", href);
  };

  return (
    <Fragment>
      <header
        id="top"
        className={`sticky top-3 z-50 flex items-center justify-between gap-x-4 gap-y-3 rounded-full transition-[background-color,box-shadow,padding] duration-300 ${
          stuck ? "bg-white/75 px-3 py-2 shadow-card backdrop-blur-xl" : ""
        }`}
      >
        <Link
          to="/"
          onClick={(e) => {
            if (onHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              history.replaceState(null, "", "/");
            }
          }}
          className="inline-flex min-h-12 items-center text-[1.0625rem] font-bold tracking-[-0.03em] text-ink sm:text-[1.2rem]"
        >
          KR ROHIT
        </Link>

        <nav
          aria-label="Primary"
          className="hidden gap-1 rounded-full bg-white p-1 text-[0.9375rem] font-medium shadow-card md:flex"
        >
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="inline-flex min-h-11 items-center rounded-full px-4 transition-colors hover:bg-brand lg:px-[1.125rem]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={onHome ? "#contact" : "/#contact"}
            onClick={(e) => onHome && handleNavClick(e, "#contact")}
            className="hidden min-h-[3.25rem] items-center gap-2.5 rounded-full bg-ink pr-2 pl-6 text-[0.9375rem] font-semibold text-white transition hover:opacity-90 md:inline-flex"
          >
            Let&apos;s talk
            <ArrowChip />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex size-[3.25rem] items-center justify-center rounded-full bg-ink text-white md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/30 md:hidden"
          role="presentation"
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-x-[var(--pad)] top-[4.75rem] z-50 max-h-[min(32rem,calc(100dvh-6rem))] overflow-y-auto rounded-b-[1.75rem] bg-white p-3 pt-4 shadow-lift md:hidden"
        >
          <p className="px-3 pb-1 font-mono text-[0.8125rem] font-normal text-dim">Menu</p>
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => jump(e, item.href)}
                className="flex min-h-14 items-center rounded-2xl px-3 text-2xl font-semibold tracking-[-0.03em] text-ink hover:bg-brand/25"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={resumePDF}
            download="Rohit_Kumar_CV.pdf"
            className="mt-2 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border-[1.5px] border-ink bg-white text-sm font-semibold text-ink"
          >
            <Download className="size-4" aria-hidden />
            Download resume
          </a>
          <a
            href="#contact"
            onClick={(e) => jump(e, "#contact")}
            className="mt-2 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-white"
          >
            Let&apos;s talk
          </a>
          {onOpenShare && (
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenShare();
              }}
              className="mt-2 inline-flex min-h-12 w-full items-center justify-center text-sm font-semibold text-dim underline-offset-2 hover:underline"
            >
              Share portfolio
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
}