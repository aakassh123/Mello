"use client";

import { Experience } from "@/types";
import { formatPrice, spotsLeft } from "@/lib/utils";
import { Badge } from "./Badge";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function ExperienceCard({ experience }: { experience: Experience }) {
  const left = spotsLeft(experience);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group overflow-hidden rounded-2xl border border-char-line bg-char-soft transition-colors hover:border-ivory/25"
    >
      <Link
        href={`/experiences/${experience.slug}`}
        className="block focus-visible:outline-none"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-char/0 to-char/0" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {experience.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
          {left <= 8 && (
            <div className="absolute bottom-3 right-3 rounded-full bg-char/80 px-3 py-1 text-xs font-semibold text-clay backdrop-blur">
              {left} spots left
            </div>
          )}
        </div>

        <div className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl text-ivory transition-colors group-hover:text-beige">
              {experience.title}
            </h3>
            <span className="whitespace-nowrap font-display text-lg text-ivory">
              {formatPrice(experience.price)}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-sm text-ivory/55">
            <MapPin className="h-3.5 w-3.5" />
            {experience.city} · {experience.date}, {experience.time}
          </div>

          <div className="flex items-center justify-between border-t border-char-line pt-3 text-sm">
            <div className="flex items-center gap-1.5 text-ivory/55">
              <Users className="h-3.5 w-3.5" />
              {experience.joined} going
            </div>
            <span className="text-ivory/40">{experience.organizer}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
