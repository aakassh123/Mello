import { Metadata } from "next";
import { trips } from "@/data/trips";
import { TripCard } from "@/components/TripCard";

export const metadata: Metadata = {
  title: "Trips",
  description: "Weekend trips and road trips organized by MELLO hosts.",
};

export default function TripsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Trips</h1>
      <p className="mt-3 max-w-lg text-ivory/55">
        Someone else plans it, you just show up with a bag.
      </p>

      <div className="mt-10 flex flex-wrap gap-6">
        {trips.map((t) => (
          <TripCard key={t.id} trip={t} />
        ))}
      </div>
    </div>
  );
}
