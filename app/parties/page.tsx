import { Metadata } from "next";
import { experiences } from "@/data/experiences";
import { ExperienceGrid } from "@/components/ExperienceGrid";

export const metadata: Metadata = {
  title: "Parties",
  description: "House parties, secret gatherings and everything in between.",
};

export default function PartiesPage() {
  const parties = experiences.filter(
    (e) => e.category === "party" || e.category === "house-party"
  );

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Parties</h1>
      <p className="mt-3 max-w-lg text-ivory/55">
        House parties, invite-only gatherings, and the occasional secret
        address.
      </p>
      <div className="mt-10">
        <ExperienceGrid experiences={parties} />
      </div>
    </div>
  );
}
