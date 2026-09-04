import { SectionHeading } from "../SectionHeading";
import { TripCard } from "../TripCard";
import { trips } from "@/data/trips";

export function FeaturedTrips() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Featured trips"
          supporting="Leave the planning to someone else, for once."
        />
      </div>
      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-[max(1.5rem,calc((100vw-80rem)/2))]">
        {trips.map((t) => (
          <TripCard key={t.id} trip={t} />
        ))}
      </div>
    </section>
  );
}
