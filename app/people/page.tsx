import { Metadata } from "next";
import { people } from "@/data/people";
import { PeopleCard } from "@/components/PeopleCard";

export const metadata: Metadata = {
  title: "Discover People",
  description: "Meet people near you who share your interests.",
};

const MY_INTERESTS = ["Travel", "Music", "Photography"];

export default function PeoplePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Discover People</h1>
      <p className="mt-3 max-w-lg text-ivory/55">
        Only what you need to say hello: first name, city and shared interests.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {people.map((p) => (
          <PeopleCard
            key={p.id}
            person={p}
            sharedInterests={
              p.interests.filter((i) => MY_INTERESTS.includes(i)).length
            }
          />
        ))}
      </div>
    </div>
  );
}
