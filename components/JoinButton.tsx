"use client";

import { useState } from "react";
import { Experience } from "@/types";
import { Button } from "./Button";
import { JoinModal } from "./JoinModal";
import { spotsLeft } from "@/lib/utils";

export function JoinButton({ experience }: { experience: Experience }) {
  const [open, setOpen] = useState(false);
  const full = spotsLeft(experience) === 0;

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        disabled={full}
        className="w-full sm:w-auto"
      >
        {full ? "Fully Booked" : "Join Experience"}
      </Button>
      <JoinModal experience={experience} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
