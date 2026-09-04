"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { categories } from "@/data/content";
import { PartyPopper } from "lucide-react";

interface FormState {
  name: string;
  category: string;
  description: string;
  location: string;
  date: string;
  time: string;
  capacity: string;
  price: string;
  coverImage: string;
  rules: string;
  ageRequirement: string;
  contact: string;
}

const emptyForm: FormState = {
  name: "",
  category: "",
  description: "",
  location: "",
  date: "",
  time: "",
  capacity: "",
  price: "",
  coverImage: "",
  rules: "",
  ageRequirement: "",
  contact: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export function CreateExperienceForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Give your experience a name";
    if (!form.category) next.category = "Choose a category";
    if (form.description.trim().length < 20)
      next.description = "Write at least 20 characters so people know what to expect";
    if (!form.location.trim()) next.location = "Add a location";
    if (!form.date) next.date = "Pick a date";
    if (!form.time) next.time = "Pick a time";
    if (!form.capacity || Number(form.capacity) < 1)
      next.capacity = "Capacity must be at least 1";
    if (form.price !== "" && Number(form.price) < 0)
      next.price = "Price can't be negative";
    if (!form.ageRequirement.trim())
      next.ageRequirement = "State an age requirement, even if it's 'All ages'";
    if (!/^\S+@\S+\.\S+$/.test(form.contact) && !/^\d{10}$/.test(form.contact))
      next.contact = "Add an email or a 10-digit phone number";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Demo-only: no backend yet. Wire this to POST /api/experiences once a database exists.
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto flex max-w-lg flex-col items-center gap-4 py-20 text-center"
      >
        <PartyPopper className="h-10 w-10 text-clay" />
        <h1 className="font-display text-4xl text-ivory">
          Your experience is ready to become a memory.
        </h1>
        <p className="text-ivory/55">
          We&apos;ll review &ldquo;{form.name}&rdquo; and list it once approved.
          You&apos;ll hear from us at {form.contact}.
        </p>
        <Button
          onClick={() => {
            setForm(emptyForm);
            setSubmitted(false);
          }}
          variant="secondary"
        >
          Create another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <TextField
        label="Experience name"
        value={form.name}
        error={errors.name}
        onChange={(v) => update("name", v)}
        placeholder="Midnight House"
      />

      <div>
        <span className="mb-1.5 block text-sm text-ivory/60">Category</span>
        <select
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
          className="w-full rounded-lg border border-char-line bg-char-soft px-3.5 py-2.5 text-sm text-ivory focus:border-ivory/40 focus:outline-none"
        >
          <option value="">Choose a category</option>
          {categories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        {errors.category && <ErrorText>{errors.category}</ErrorText>}
      </div>

      <TextArea
        label="Description"
        value={form.description}
        error={errors.description}
        onChange={(v) => update("description", v)}
        placeholder="What's the vibe? What should people expect?"
      />

      <TextField
        label="Location"
        value={form.location}
        error={errors.location}
        onChange={(v) => update("location", v)}
        placeholder="Rooftop 12, Civil Lines, Kanpur"
      />

      <div className="grid grid-cols-2 gap-4">
        <TextField
          label="Date"
          type="date"
          value={form.date}
          error={errors.date}
          onChange={(v) => update("date", v)}
        />
        <TextField
          label="Time"
          type="time"
          value={form.time}
          error={errors.time}
          onChange={(v) => update("time", v)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TextField
          label="Capacity"
          type="number"
          value={form.capacity}
          error={errors.capacity}
          onChange={(v) => update("capacity", v)}
          placeholder="25"
        />
        <TextField
          label="Price (₹, 0 for free)"
          type="number"
          value={form.price}
          error={errors.price}
          onChange={(v) => update("price", v)}
          placeholder="499"
        />
      </div>

      <TextField
        label="Cover image URL"
        value={form.coverImage}
        onChange={(v) => update("coverImage", v)}
        placeholder="https://..."
      />

      <TextArea
        label="Rules (one per line)"
        value={form.rules}
        onChange={(v) => update("rules", v)}
        placeholder={"No entry after 11 PM\nRespect the noise curfew"}
      />

      <TextField
        label="Age requirement"
        value={form.ageRequirement}
        error={errors.ageRequirement}
        onChange={(v) => update("ageRequirement", v)}
        placeholder="21+ or 'All ages'"
      />

      <TextField
        label="Contact (email or phone)"
        value={form.contact}
        error={errors.contact}
        onChange={(v) => update("contact", v)}
        placeholder="you@example.com"
      />

      <Button type="submit" className="w-full sm:w-auto">
        Create Experience
      </Button>
    </form>
  );
}

function TextField({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-ivory/60">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-char-line bg-char-soft px-3.5 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-ivory/40 focus:outline-none"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-ivory/60">{label}</span>
      <textarea
        rows={4}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-char-line bg-char-soft px-3.5 py-2.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-ivory/40 focus:outline-none"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <span className="mt-1 block text-xs text-clay">{children}</span>;
}
