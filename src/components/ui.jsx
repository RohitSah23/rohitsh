export function Container({ children, className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.14em] uppercase ${className}`}
    >
      {children}
    </p>
  );
}

export function Heading({ children, id, className = "" }) {
  return (
    <h2
      id={id}
      className={`text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-balance text-ink ${className}`}
    >
      {children}
    </h2>
  );
}

/** Sarg-style green highlight on heading phrases */
export function HeadingAccent({ children }) {
  return (
    <span className="inline-block rounded-full bg-brand px-[0.15em] pb-[0.04em]">{children}</span>
  );
}

export function SectionLead({ children, className = "" }) {
  return (
    <p className={`max-w-[54ch] text-base leading-relaxed text-dim sm:text-[17px] ${className}`}>
      {children}
    </p>
  );
}

export function PillLink({
  href,
  children,
  className = "",
  external = false,
  download = false,
  onClick,
}) {
  const extProps = external ? { target: "_blank", rel: "noreferrer noopener" } : {};
  const downloadProp = download ? { download: download === true ? "" : download } : {};

  return (
    <a
      href={href}
      onClick={onClick}
      {...extProps}
      {...downloadProp}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-[transform,background-color,color,box-shadow] duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}

export function TextLink({ href, children, className = "", external = false, onClick }) {
  const extProps = external ? { target: "_blank", rel: "noreferrer noopener" } : {};
  return (
    <a
      href={href}
      onClick={onClick}
      {...extProps}
      className={`inline-flex items-center gap-1 border-b-[1.5px] border-current pb-0.5 text-[15px] font-semibold transition-opacity hover:opacity-70 cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}
