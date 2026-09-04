"use client";

import { Person } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

export function PeopleCard({
  person,
  sharedInterests,
}: {
  person: Person;
  sharedInterests?: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-2xl border border-char-line bg-char-soft"
    >
      <div className="relative h-56 w-full">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
        />
      </div>
      <div className="space-y-2 p-5">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-lg text-ivory">
            {person.name}, {person.age}
          </h3>
          <span className="text-xs text-ivory/45">{person.city}</span>
        </div>
        <p className="text-sm text-ivory/55">{person.interests.join(" · ")}</p>
        {typeof sharedInterests === "number" && sharedInterests > 0 && (
          <p className="text-xs text-clay">
            {sharedInterests} shared interest{sharedInterests > 1 ? "s" : ""}
          </p>
        )}
        <button className="mt-2 w-full rounded-full border border-ivory/25 py-2 text-sm text-ivory transition-colors hover:border-ivory/60">
          Connect
        </button>
      </div>
    </motion.div>
  );
}
