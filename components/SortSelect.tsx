"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function SortSelect({ basePath = "/experiences" }: { basePath?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("sort", value);
    else params.delete("sort");
    router.push(`${basePath}?${params.toString()}`);
  }

  return (
    <select
      defaultValue={searchParams.get("sort") ?? "popularity"}
      onChange={(e) => setSort(e.target.value)}
      className="rounded-full border border-char-line bg-char-soft px-4 py-2.5 text-sm text-ivory/70 focus:outline-none"
    >
      <option value="popularity">Most popular</option>
      <option value="date">Soonest</option>
      <option value="price">Price: low to high</option>
    </select>
  );
}
