"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cx } from "@/lib/utils";
import { Button } from "./Button";

const links = [
  { href: "/experiences", label: "Discover" },
  { href: "/people", label: "People" },
  { href: "/trips", label: "Trips" },
  { href: "/parties", label: "Parties" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-char/90 backdrop-blur-md border-b border-char-line"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="font-display text-2xl tracking-tight text-ivory">
          MELLO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ivory/70 transition-colors hover:text-ivory"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/create" variant="secondary" className="px-5 py-2.5">
            Create Experience
          </Button>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex min-h-11 min-w-11 items-center justify-center text-ivory md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-char md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
              <span className="font-display text-2xl text-ivory">MELLO</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex min-h-11 min-w-11 items-center justify-center"
              >
                <X className="h-6 w-6 text-ivory" />
              </button>
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8"
            >
              {[...links, { href: "/create", label: "Create Experience" }].map(
                (l) => (
                  <motion.div
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-char-line py-4 font-display text-3xl text-ivory"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
