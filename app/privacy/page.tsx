import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How MELLO handles your information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Privacy</h1>
      <div className="mt-10 space-y-6 text-ivory/60">
        <p>
          This is placeholder policy text for a demo project. A real MELLO
          launch would replace this page with a full privacy policy covering
          what&apos;s collected when you join an experience or create a
          profile, how long it&apos;s kept, and who it&apos;s shared with.
        </p>
        <p>
          Profile cards on MELLO show only first name, age, city and
          interests by design — full names, contact details and payment
          information are never shown to other members.
        </p>
        <p>
          Information submitted through the Join or Create Experience forms
          in this demo is not sent anywhere or stored outside your current
          session.
        </p>
      </div>
    </div>
  );
}
