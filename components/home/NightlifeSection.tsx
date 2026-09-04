import { Button } from "../Button";
import Image from "next/image";

export function NightlifeSection() {
  return (
    <section className="relative overflow-hidden border-y border-char-line bg-char py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571266028243-d220c9c3b31b?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35 transition-transform duration-[1600ms] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/75 to-char/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-char/70 via-transparent to-clay/10" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-beige">
          MELLO after dark
        </p>
        <h2 className="font-display text-4xl leading-tight text-ivory sm:text-6xl">
          Your weekend just got interesting.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-ivory/60">
          Club nights, house parties, DJ sets and the occasional secret address —
          curated for people who don&apos;t want a boring Friday.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/parties">Browse Parties</Button>
          <Button href="/clubs" variant="secondary">
            Browse Clubs
          </Button>
        </div>
      </div>
    </section>
  );
}
