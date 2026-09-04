import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About MELLO",
  description: "Why MELLO exists and what it's building toward.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl leading-tight text-ivory sm:text-6xl">
        MELLO exists to make meeting people feel natural again.
      </h1>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-ivory/65">
        <p>
          Most apps built for meeting people ask you to swipe, match, and message
          before you ever actually spend time with someone. MELLO starts from
          the other direction: show up to something real — a rooftop party, a
          trek, a food crawl, a road trip — and let the people follow.
        </p>
        <p>
          It started in Gorakhpur, as a small experiment in getting strangers
          into the same room on purpose. A house party here, a sunrise trek
          there. What made it work wasn&apos;t the events themselves — it was
          watching people who&apos;d never met leave with plans to meet again.
        </p>
        <p>
          MELLO is built around four things: people, experiences, connection,
          and memory. Everything on the platform, from a Friday club night to a
          three-day trip to Goa, is designed around the same question — will
          someone remember this a year from now?
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 border-t border-char-line pt-10 sm:grid-cols-4">
        {["People", "Experiences", "Connection", "Memories"].map((word) => (
          <p key={word} className="font-display text-xl text-ivory">
            {word}
          </p>
        ))}
      </div>
    </div>
  );
}
