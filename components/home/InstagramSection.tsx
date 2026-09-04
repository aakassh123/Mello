import Image from "next/image";
import { instagramGrid } from "@/data/content";
import { Button } from "../Button";

export function InstagramSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">
            Follow the MELLO.
          </h2>
          <p className="mt-3 text-ivory/55">@mello.gkp</p>
        </div>
        <Button
          href="https://instagram.com/mello.gkp"
          variant="secondary"
        >
          Follow on Instagram
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {instagramGrid.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={src}
              alt=""
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
