"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/content";

export function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm text-ivory/40">Demo stories from early MELLO members</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-char-line bg-char-soft p-7"
          >
            <blockquote className="font-display text-xl leading-snug text-ivory">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-ivory/50">
              {t.name}, {t.city}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
