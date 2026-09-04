"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { PartyPopper } from "lucide-react";
import { Experience } from "@/types";

interface FormState {
  name: string;
  email: string;
  phone: string;
  people: number;
}

const emptyForm: FormState = { name: "", email: "", phone: "", people: 1 };

export function JoinModal({
  experience,
  open,
  onClose,
}: {
  experience: Experience;
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!/^\d{10}$/.test(form.phone)) next.phone = "Enter a 10-digit phone number";
    if (form.people < 1) next.people = "At least 1 person";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
    // Demo-only: no backend call yet. Wire this to /api/join once a database exists.
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm(emptyForm);
      setErrors({});
    }, 200);
  }

  return (
    <Modal open={open} onClose={handleClose}>
      {submitted ? (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <PartyPopper className="h-8 w-8 text-clay" />
          <h3 className="font-display text-2xl text-ivory">You&apos;re in 🎉</h3>
          <p className="text-sm text-ivory/60">
            {experience.organizer} will confirm the details by message before{" "}
            {experience.date.toLowerCase()}.
          </p>
          <Button onClick={handleClose} className="mt-2">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="font-display text-2xl text-ivory">
              Join {experience.title}
            </h3>
            <p className="text-sm text-ivory/50">
              {experience.date} · {experience.time}
            </p>
          </div>

          <Field
            label="Full name"
            value={form.name}
            error={errors.name}
            onChange={(v) => setForm({ ...form, name: v })}
          />
          <Field
            label="Email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(v) => setForm({ ...form, email: v })}
          />
          <Field
            label="Phone"
            type="tel"
            value={form.phone}
            error={errors.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
          />
          <Field
            label="Number of people"
            type="number"
            value={String(form.people)}
            error={errors.people}
            onChange={(v) => setForm({ ...form, people: Number(v) || 1 })}
          />

          <Button className="w-full">Confirm and join</Button>
        </form>
      )}
    </Modal>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-ivory/60">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-char-line bg-char px-3.5 py-2.5 text-sm text-ivory focus:border-ivory/40 focus:outline-none"
      />
      {error && <span className="mt-1 block text-xs text-clay">{error}</span>}
    </label>
  );
}
