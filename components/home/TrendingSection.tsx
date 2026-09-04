import { SectionHeading } from "../SectionHeading";
import { ExperienceGrid } from "../ExperienceGrid";
import { experiences } from "@/data/experiences";
import { Button } from "../Button";

export function TrendingSection() {
  const trending = [...experiences].sort((a, b) => b.joined - a.joined).slice(0, 3);

  return (
    <section className="bg-char-soft/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Trending this week"
            supporting="What people in your city are actually showing up for."
          />
          <Button href="/experiences" variant="ghost" className="px-0">
            See all experiences
          </Button>
        </div>
        <div className="mt-10">
          <ExperienceGrid experiences={trending} />
        </div>
      </div>
    </section>
  );
}
