import { Button } from "../Button";

export function CreateCTA() {
  return (
    <section className="border-y border-char-line bg-char-soft/50 px-6 py-24 text-center">
      <h2 className="font-display text-4xl text-ivory sm:text-5xl">
        Got a vibe?
        <br />
        Create the experience.
      </h2>
      <div className="mt-8">
        <Button href="/create">Create Experience</Button>
      </div>
    </section>
  );
}
