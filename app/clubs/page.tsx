import { Metadata } from "next";
import { experiences } from "@/data/experiences";
import { ExperienceGrid } from "@/components/ExperienceGrid";

export const metadata: Metadata = {
  title: "Clubs",
  description: "Club nights and DJ sets curated for people going solo or in a group.",
};

export default function ClubsPage() {
  const clubs = experiences.filter((e) => e.category === "club");

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Clubs</h1>
      <p className="mt-3 max-w-lg text-ivory/55">
        Club nights and DJ sets — table service included, showing up alone is
        welcome.
      </p>
      <div className="mt-10">
        <ExperienceGrid experiences={clubs} />
      </div>
    </div>
  );
}
