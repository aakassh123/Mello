import { Metadata } from "next";
import { ShieldAlert, Flag, Users, MapPin, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "Safety",
  description: "How MELLO approaches safety for a stranger-meeting platform.",
};

const sections = [
  {
    icon: Users,
    title: "Community guidelines",
    body: "Show up as yourself, respect the people you meet, and leave a space better than you found it. Organizers and members who break this are removed.",
  },
  {
    icon: MapPin,
    title: "Meeting people for the first time",
    body: "Choose experiences with public meeting points where possible, tell someone where you're headed, and arrange your own way home. MELLO lists experiences; it doesn't supervise them in person.",
  },
  {
    icon: Ban,
    title: "Respect and consent",
    body: "No harassment, unwanted contact, or pressure of any kind. Consent is asked for, not assumed — at an event and in any conversation on the platform.",
  },
  {
    icon: Flag,
    title: "Report a user or experience",
    body: "Every profile and listing has a report option. Reports are reviewed by our team, and accounts under review are limited while we look into it.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency guidance",
    body: "If you're in immediate danger, contact local emergency services first. MELLO's report tools are for platform safety, not emergency response.",
  },
];

export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Safety</h1>
      <p className="mt-3 max-w-lg text-ivory/55">
        MELLO brings strangers together on purpose. Here's how we try to make
        that safer.
      </p>

      <div className="mt-14 space-y-10">
        {sections.map((s) => (
          <div key={s.title} className="flex gap-5">
            <s.icon className="mt-1 h-6 w-6 shrink-0 text-clay" />
            <div>
              <h2 className="font-display text-2xl text-ivory">{s.title}</h2>
              <p className="mt-2 text-ivory/60">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-char-line bg-char-soft p-6 text-sm text-ivory/50">
        Organizer verification and in-app block/report tools are part of
        MELLO&apos;s roadmap as the platform grows beyond its current mock data.
        Nothing here should be read as a guarantee of safety at any specific
        event.
      </div>
    </div>
  );
}
