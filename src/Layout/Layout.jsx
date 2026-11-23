import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";
import { FloatingShareButton, ShareModal } from "../components/ShareModal.jsx";

export default function Layout() {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-soft text-ink selection:bg-brand/35 selection:text-ink">
      <div className="mx-auto w-full max-w-[1280px] px-[var(--pad)] pb-6 pt-5">
        <Navbar onOpenShare={() => setShareOpen(true)} />
        <Outlet />
      </div>
      <FloatingShareButton onOpen={() => setShareOpen(true)} />
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </div>
  );
}