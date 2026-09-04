"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchBar({ basePath = "/experiences" }: { basePath?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("q", value);
    else params.delete("q");
    router.push(`${basePath}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={submit}
      className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-char-line bg-char-soft px-4 py-2.5"
    >
      <Search className="h-4 w-4 shrink-0 text-ivory/40" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search by city, vibe or tag"
        className="min-w-0 w-full bg-transparent text-sm text-ivory placeholder:text-ivory/35 focus:outline-none"
      />
    </form>
  );
}
