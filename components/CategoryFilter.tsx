"use client";

import { categories } from "@/data/content";
import { cx } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export function CategoryFilter({ basePath = "/experiences" }: { basePath?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category");

  function setCategory(value?: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("category", value);
    else params.delete("category");
    router.push(`${basePath}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setCategory(undefined)}
        className={cx(
          "rounded-full border px-4 py-2 text-sm transition-colors",
          !active
            ? "border-ivory bg-ivory text-char"
            : "border-char-line text-ivory/60 hover:border-ivory/40"
        )}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c.value}
          onClick={() => setCategory(c.value)}
          className={cx(
            "rounded-full border px-4 py-2 text-sm transition-colors",
            active === c.value
              ? "border-ivory bg-ivory text-char"
              : "border-char-line text-ivory/60 hover:border-ivory/40"
          )}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
