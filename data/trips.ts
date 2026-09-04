import { Trip } from "@/types";

export const trips: Trip[] = [
  {
    id: "t1",
    slug: "goa-weekend",
    destination: "Goa",
    title: "Goa Weekend",
    description: "Beach days, a boat afternoon, one big night out.",
    price: 4999,
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
    spotsLeft: 8,
    going: 8,
    date: "This Weekend",
  },
  {
    id: "t2",
    slug: "rishikesh-escape",
    destination: "Rishikesh",
    title: "Rishikesh Escape",
    description: "River rafting, campfire nights, a genuinely quiet morning.",
    price: 3499,
    duration: "2 Days",
    image:
      "https://images.unsplash.com/photo-1591017683209-ac9f2a3b3aa9?q=80&w=1600&auto=format&fit=crop",
    spotsLeft: 12,
    going: 8,
    date: "Next Weekend",
  },
  {
    id: "t3",
    slug: "jaipur-after-dark",
    destination: "Jaipur",
    title: "Jaipur After Dark",
    description: "Forts by day, rooftop dinners and old-city walks by night.",
    price: 2999,
    duration: "2 Days",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1600&auto=format&fit=crop",
    spotsLeft: 6,
    going: 14,
    date: "In 2 Weeks",
  },
  {
    id: "t4",
    slug: "himalayan-road-trip",
    destination: "Manali",
    title: "Himalayan Road Trip",
    description: "A slow drive up, cold air, and a shared bonfire each night.",
    price: 6499,
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
    spotsLeft: 4,
    going: 10,
    date: "Late September",
  },
];
