import { Suspense } from "react";
import { SectionHeading } from "../SectionHeading";
import { CategoryFilter } from "../CategoryFilter";
import { ExperienceGrid } from "../ExperienceGrid";
import { experiences } from "@/data/experiences";

export function DiscoverSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        title="Find something worth showing up for"
        supporting="Nine kinds of nights out, one place to find them."
      />
      <div className="mt-8">
        <Suspense fallback={null}>
          <CategoryFilter />
        </Suspense>
      </div>
      <div className="mt-10">
        <ExperienceGrid experiences={experiences.slice(0, 6)} />
      </div>
    </section>
  );
}
