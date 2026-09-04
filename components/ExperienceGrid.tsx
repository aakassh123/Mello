"use client";

import { Experience } from "@/types";
import { ExperienceCard } from "./ExperienceCard";
import { EmptyState } from "./States";
import { motion } from "framer-motion";

export function ExperienceGrid({ experiences }: { experiences: Experience[] }) {
  if (experiences.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
        >
          <ExperienceCard experience={exp} />
        </motion.div>
      ))}
    </div>
  );
}
