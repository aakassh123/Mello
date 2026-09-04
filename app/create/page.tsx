import { Metadata } from "next";
import { CreateExperienceForm } from "@/components/CreateExperienceForm";

export const metadata: Metadata = {
  title: "Create an Experience",
  description: "List your own meetup, party, trip or event on MELLO.",
};

export default function CreatePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">
        Got a vibe? Create the experience.
      </h1>
      <p className="mt-3 max-w-lg text-ivory/55">
        Fill this in and we&apos;ll list it for people nearby to find.
      </p>
      <div className="mt-12">
        <CreateExperienceForm />
      </div>
    </div>
  );
}
