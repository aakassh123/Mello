"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Find an experience that matches your vibe.",
  },
  {
    n: "02",
    title: "Connect",
    body: "Meet people who are into the same things.",
  },
  {
    n: "03",
    title: "Experience",
    body: "Show up and enjoy the moment.",
  },
  {
    n: "04",
    title: "Remember",
    body: "Turn a random day into a memory.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-char-line bg-char-soft/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="How MELLO works" />
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-char-line pt-5"
            >
              <span className="font-display text-sm text-clay">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl text-ivory">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ivory/55">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
