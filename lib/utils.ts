import { Experience } from "@/types";

export function formatPrice(price: number) {
  if (price === 0) return "Free";
  return `₹${price.toLocaleString("en-IN")}`;
}

export function spotsLeft(exp: Experience) {
  return Math.max(exp.capacity - exp.joined, 0);
}

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export interface ExperienceFilters {
  category?: string;
  city?: string;
  q?: string;
  sort?: "popularity" | "price" | "date";
}

export function filterExperiences(
  experiences: Experience[],
  filters: ExperienceFilters
) {
  let result = [...experiences];

  if (filters.category) {
    result = result.filter((e) => e.category === filters.category);
  }
  if (filters.city) {
    result = result.filter(
      (e) => e.city.toLowerCase() === filters.city!.toLowerCase()
    );
  }
  if (filters.q) {
    const q = filters.q.toLowerCase();
    result = result.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        e.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  switch (filters.sort) {
    case "price":
      result.sort((a, b) => a.price - b.price);
      break;
    case "date":
      result.sort(
        (a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()
      );
      break;
    case "popularity":
    default:
      result.sort((a, b) => b.joined - a.joined);
      break;
  }

  return result;
}
