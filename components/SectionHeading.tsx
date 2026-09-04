import { cx } from "@/lib/utils";

export function SectionHeading({
  title,
  supporting,
  align = "left",
  className,
}: {
  title: string;
  supporting?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="font-display text-4xl leading-[1.05] text-ivory sm:text-5xl">
        {title}
      </h2>
      {supporting && (
        <p className="mt-4 text-base text-ivory/60 sm:text-lg">{supporting}</p>
      )}
    </div>
  );
}
