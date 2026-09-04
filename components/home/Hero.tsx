"use client";

import { motion } from "framer-motion";
import { Button } from "../Button";
import { MapPin } from "lucide-react";

const floatingCards = [
  { title: "House Party", meta: "Tonight · 12 spots left", top: "12%", left: "68%" },
  { title: "Goa Trip", meta: "This Weekend · 8 spots left", top: "56%", left: "78%" },
  { title: "Club Night", meta: "Friday · 24 going", top: "72%", left: "8%" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const line = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-char pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-clay/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-moss/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div>
          <motion.div variants={container} initial="hidden" animate="show">
            <h1 className="font-display text-[13vw] leading-[0.92] tracking-tightest2 text-ivory sm:text-7xl lg:text-[5.5rem]">
              <span className="block overflow-hidden">
                <motion.span variants={line} className="block">
                  People.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={line} className="block">
                  Experiences.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span variants={line} className="block text-beige">
                  Memories.
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 max-w-md text-lg text-ivory/60"
          >
            Discover people, places and experiences worth remembering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="/experiences">Explore Experiences</Button>
            <Button href="/create" variant="secondary">
              Create an Experience
            </Button>
          </motion.div>
        </div>

        <div className="relative hidden min-h-[420px] lg:block">
          {floatingCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
              className="absolute w-52 animate-float rounded-xl border border-char-line bg-char-soft/90 p-4 backdrop-blur"
              style={{ top: c.top, left: c.left, animationDelay: `${i * 0.7}s` }}
            >
              <div className="flex items-center gap-1.5 text-xs text-ivory/40">
                <MapPin className="h-3 w-3" /> {c.title}
              </div>
              <p className="mt-1 text-sm text-ivory/80">{c.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
