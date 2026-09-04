import { Button } from "../Button";

export function FinalCTA() {
  return (
    <section className="bg-char px-6 py-32 text-center">
      <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl">
        Don&apos;t just go out.
        <br />
        Make it a memory.
      </h2>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Button href="/experiences">Explore Experiences</Button>
        <Button href="/create" variant="secondary">
          Create Experience
        </Button>
      </div>
    </section>
  );
}
