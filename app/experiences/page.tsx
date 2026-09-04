import { Suspense } from "react";
import { Metadata } from "next";
import { experiences } from "@/data/experiences";
import { filterExperiences } from "@/lib/utils";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { SortSelect } from "@/components/SortSelect";
import { ExperienceGrid } from "@/components/ExperienceGrid";

export const metadata: Metadata = {
  title: "Discover Experiences",
  description:
    "Browse meetups, parties, trips and more happening near you on MELLO.",
};

export default function ExperiencesPage({
  searchParams,
}: {
  searchParams: { category?: string; city?: string; q?: string; sort?: string };
}) {
  const filtered = filterExperiences(experiences, {
    category: searchParams.category,
    city: searchParams.city,
    q: searchParams.q,
    sort: searchParams.sort as "popularity" | "price" | "date" | undefined,
  });

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Discover Experiences</h1>
      <p className="mt-3 max-w-lg text-ivory/55">
        {experiences.length} experiences and counting, across meetups, parties,
        trips and more.
      </p>

      <Suspense fallback={null}>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar />
          <SortSelect />
        </div>
        <div className="mt-6">
          <CategoryFilter />
        </div>
      </Suspense>

      <div className="mt-10">
        <ExperienceGrid experiences={filtered} />
      </div>
    </div>
  );
}
