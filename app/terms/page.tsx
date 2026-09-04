import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for MELLO.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Terms</h1>
      <div className="mt-10 space-y-6 text-ivory/60">
        <p>
          This is placeholder terms text for a demo project. A real MELLO
          launch would cover eligibility, organizer responsibilities, payment
          and refund terms, and acceptable use across experiences, trips and
          the people directory.
        </p>
        <p>
          By joining any experience listed here, members agree to follow that
          experience&apos;s stated rules and MELLO&apos;s community
          guidelines, outlined on the Safety page.
        </p>
      </div>
    </div>
  );
}
