import { Testimonial, Category } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "I came alone. I left with five new friends.",
    name: "Aarav",
    city: "Kanpur",
  },
  {
    id: "2",
    quote: "MELLO turned a random weekend into my favourite memory.",
    name: "Riya",
    city: "Gorakhpur",
  },
  {
    id: "3",
    quote: "I've stopped scrolling for plans. I just check what's on.",
    name: "Kabir",
    city: "Lucknow",
  },
];

export const categories: { value: Category; label: string }[] = [
  { value: "meetup", label: "Meetups" },
  { value: "party", label: "Parties" },
  { value: "club", label: "Clubs" },
  { value: "house-party", label: "House Parties" },
  { value: "trip", label: "Trips" },
  { value: "adventure", label: "Adventures" },
  { value: "music", label: "Music" },
  { value: "food", label: "Food" },
  { value: "networking", label: "Networking" },
];

// Demo-only, not a real feed. See data/content.ts for context if wiring an API later.
export const instagramGrid = [
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571266028243-d220c9c3b31b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
];
