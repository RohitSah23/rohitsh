import { useState, useEffect } from "react";
import { Share2, X, Copy, Check, Send, ExternalLink } from "lucide-react";
import { SITE_METADATA } from "../lib/data";

export function FloatingShareButton({ onOpen }) {
  return (
    <div
      id="floating-share-button"
      className="fixed bottom-6 right-[var(--pad)] z-40 transition-transform duration-300 hover:scale-105"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label="Share profile"
        className="flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:opacity-90"
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>
    </div>
  );
}

export function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const shareUrl = window.location.origin;
  const shareTitle = `${SITE_METADATA.name} — ${SITE_METADATA.role}`;
  const shareText = `Check out ${SITE_METADATA.name}'s portfolio: ${SITE_METADATA.role}.`;

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement("input");
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setToast("Link copied to clipboard!");
      setTimeout(() => {
        setCopied(false);
        setToast(null);
      }, 2500);
    } catch {
      setToast("Could not copy link");
      setTimeout(() => setToast(null), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } catch {
        // User dismissed
      }
    } else {
      copyToClipboard();
    }
  };

  const shareChannels = [
    {
      name: "X (Twitter)",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-black hover:text-white",
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:bg-[#0a66c2] hover:text-white",
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: "hover:bg-[#25D366] hover:text-white",
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: "hover:bg-[#229ED9] hover:text-white",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-md animate-reveal rounded-3xl border border-rule bg-white p-6 shadow-lift sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Spread the word
            </p>
            <h3 id="share-modal-title" className="text-xl font-bold text-ink">
              Share Portfolio
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-rule bg-soft text-dim transition hover:bg-brand/20 hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Profile Card Preview */}
        <div className="mt-5 rounded-2xl border border-rule bg-soft p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-bold text-ink">
              KR
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="truncate text-base font-bold text-ink">
                {SITE_METADATA.name}
              </h4>
              <p className="truncate text-xs text-ink-soft">
                {SITE_METADATA.role}
              </p>
            </div>
          </div>
          <p className="mt-2.5 text-xs text-ink-soft line-clamp-2">
            {SITE_METADATA.description}
          </p>
        </div>

        {/* Copy Link Input */}
        <div className="mt-5">
          <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft block mb-1.5">
            Portfolio URL
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-rule bg-soft p-1.5 pl-3">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Share buttons */}
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft mb-2">
            Share via
          </p>
          <div className="grid grid-cols-2 gap-2">
            {shareChannels.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 rounded-xl border border-rule bg-white py-2.5 px-3 text-xs font-semibold text-ink transition ${ch.color}`}
              >
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                {ch.name}
              </a>
            ))}
          </div>
        </div>

        {/* Native share button if supported */}
        <button
          onClick={handleNativeShare}
          className="mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border-[1.5px] border-ink bg-white py-2.5 text-xs font-semibold text-ink transition hover:-translate-y-0.5"
        >
          <Send className="h-3.5 w-3.5" /> Device Share Sheet
        </button>

        {/* Toast confirmation */}
        {toast && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white shadow-lg animate-reveal">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
