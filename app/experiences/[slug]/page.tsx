import { experiences, getExperienceBySlug } from "@/data/experiences";
import { formatPrice, spotsLeft } from "@/lib/utils";
import { Badge } from "@/components/Badge";
import { JoinButton } from "@/components/JoinButton";
import { Calendar, Clock, MapPin, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const exp = getExperienceBySlug(params.slug);
  if (!exp) return { title: "Experience not found" };
  return {
    title: exp.title,
    description: exp.description,
  };
}

export default function ExperiencePage({
  params,
}: {
  params: { slug: string };
}) {
  const experience = getExperienceBySlug(params.slug);
  if (!experience) notFound();

  const left = spotsLeft(experience);

  return (
    <div className="pt-20">
      <div className="relative h-[50vh] min-h-[360px] w-full">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/40 to-char/20" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-6 pb-10">
          <div className="mb-3 flex flex-wrap gap-2">
            {experience.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
          <h1 className="font-display text-4xl text-ivory sm:text-6xl">
            {experience.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-10">
          <p className="text-lg leading-relaxed text-ivory/70">
            {experience.longDescription}
          </p>

          <div>
            <h2 className="font-display text-2xl text-ivory">What to expect</h2>
            <ul className="mt-4 space-y-2">
              {experience.whatToExpect.map((item) => (
                <li key={item} className="flex gap-3 text-ivory/65">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ivory">Rules</h2>
            <ul className="mt-4 space-y-2">
              {experience.rules.map((item) => (
                <li key={item} className="flex gap-3 text-ivory/65">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-ivory/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-char-line px-3 py-1 text-xs text-ivory/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <aside className="h-fit space-y-5 rounded-2xl border border-char-line bg-char-soft p-6">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-3xl text-ivory">
              {formatPrice(experience.price)}
            </span>
            <span className="text-sm text-ivory/50">per person</span>
          </div>

          <dl className="space-y-3 border-t border-char-line pt-4 text-sm">
            <Row icon={<Calendar className="h-4 w-4" />} label={experience.date} />
            <Row icon={<Clock className="h-4 w-4" />} label={experience.time} />
            <Row
              icon={<MapPin className="h-4 w-4" />}
              label={`${experience.location}, ${experience.city}`}
            />
            <Row
              icon={<Users className="h-4 w-4" />}
              label={`${experience.joined} going · ${left} spots left`}
            />
          </dl>

          <p className="text-xs text-ivory/40">
            Meeting point: {experience.meetingPoint}
          </p>
          <p className="text-xs text-ivory/40">
            Age requirement: {experience.ageRequirement}
          </p>
          <p className="text-xs text-ivory/40">Hosted by {experience.organizer}</p>

          <JoinButton experience={experience} />
        </aside>
      </div>
    </div>
  );
}

function Row({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-ivory/65">
      <span className="text-ivory/35">{icon}</span>
      {label}
    </div>
  );
}
