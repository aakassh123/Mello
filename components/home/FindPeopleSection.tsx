import { SectionHeading } from "../SectionHeading";
import { PeopleCard } from "../PeopleCard";
import { people } from "@/data/people";
import { Button } from "../Button";

export function FindPeopleSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        title="Maybe your next best memory starts with a stranger"
        supporting="People near you, sorted by what you actually have in common."
      />
      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {people.slice(0, 4).map((p, i) => (
          <PeopleCard key={p.id} person={p} sharedInterests={[2, 1, 3, 1][i]} />
        ))}
      </div>
      <div className="mt-10">
        <Button href="/people" variant="secondary">
          Discover People
        </Button>
      </div>
    </section>
  );
}
