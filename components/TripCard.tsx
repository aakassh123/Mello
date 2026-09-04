import { Trip } from "@/types";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <div className="group relative h-[420px] w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[340px]">
      <Image
        src={trip.image}
        alt={trip.destination}
        fill
        sizes="340px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-char via-char/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 space-y-2 p-6">
        <p className="text-xs uppercase tracking-wide text-ivory/60">
          {trip.duration} · {trip.date}
        </p>
        <h3 className="font-display text-2xl text-ivory">{trip.title}</h3>
        <p className="text-sm text-ivory/65">{trip.description}</p>
        <div className="flex items-center justify-between pt-2 text-sm">
          <span className="font-display text-lg text-ivory">
            {formatPrice(trip.price)}
          </span>
          <span className="text-ivory/50">
            {trip.going} going · {trip.spotsLeft} left
          </span>
        </div>
      </div>
    </div>
  );
}
