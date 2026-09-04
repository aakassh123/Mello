import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the MELLO team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-32">
      <h1 className="font-display text-5xl text-ivory">Contact</h1>
      <p className="mt-3 text-ivory/55">
        Questions, partnership ideas, or something to report — write to us.
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
