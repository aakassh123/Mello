"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
      {sent ? (
        <p className="mt-12 rounded-2xl border border-char-line bg-char-soft p-6 text-ivory/70">
          Thanks, {form.name || "there"}. We&apos;ll reply to {form.email} soon.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-12 space-y-5"
        >
          <label className="block">
            <span className="mb-1.5 block text-sm text-ivory/60">Name</span>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-char-line bg-char-soft px-3.5 py-2.5 text-sm text-ivory focus:border-ivory/40 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm text-ivory/60">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-char-line bg-char-soft px-3.5 py-2.5 text-sm text-ivory focus:border-ivory/40 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm text-ivory/60">Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-char-line bg-char-soft px-3.5 py-2.5 text-sm text-ivory focus:border-ivory/40 focus:outline-none"
            />
          </label>
          <Button type="submit">Send message</Button>
        </form>
      )}
    </>
  );
}
