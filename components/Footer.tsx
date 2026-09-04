import Link from "next/link";
import { Instagram } from "lucide-react";

const columns = [
  {
    heading: "Explore",
    links: [
      { href: "/experiences", label: "Experiences" },
      { href: "/trips", label: "Trips" },
      { href: "/parties", label: "Parties" },
      { href: "/clubs", label: "Clubs" },
    ],
  },
  {
    heading: "Community",
    links: [
      { href: "/people", label: "People" },
      { href: "/create", label: "Create Experience" },
      { href: "/about", label: "About MELLO" },
    ],
  },
  {
    heading: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/safety", label: "Safety" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-char-line bg-char px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <p className="font-display text-3xl text-ivory">MELLO</p>
          <p className="mt-2 text-sm text-ivory/50">
            People · Experiences · Memories
          </p>
          <a
            href="https://instagram.com/mello.gkp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-ivory/60 hover:text-ivory"
          >
            <Instagram className="h-4 w-4" /> @mello.gkp
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-sm text-ivory/40">{col.heading}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ivory/70 hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-7xl text-xs text-ivory/30">
        © {new Date().getFullYear()} MELLO. Made in Gorakhpur.
      </p>
    </footer>
  );
}
