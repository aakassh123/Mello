export type Category =
  | "meetup"
  | "party"
  | "club"
  | "house-party"
  | "trip"
  | "adventure"
  | "music"
  | "food"
  | "networking";

export interface Experience {
  id: string;
  slug: string;
  title: string;
  category: Category;
  description: string;
  longDescription: string;
  location: string;
  city: string;
  date: string; // display string e.g. "Tonight", "Sat, 14 Sep"
  isoDate: string; // ISO date for sorting/filtering
  time: string;
  price: number; // 0 for free
  image: string;
  capacity: number;
  joined: number;
  organizer: string;
  tags: string[];
  badges: Badge[];
  rules: string[];
  whatToExpect: string[];
  meetingPoint: string;
  ageRequirement: string;
}

export type Badge =
  | "TRENDING"
  | "TONIGHT"
  | "NEW"
  | "FEW SPOTS LEFT"
  | "POPULAR"
  | "INVITE ONLY";

export interface Trip {
  id: string;
  slug: string;
  destination: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  spotsLeft: number;
  going: number;
  date: string;
}

export interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
  interests: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  city: string;
}
