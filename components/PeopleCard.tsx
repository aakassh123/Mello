"use client";

import { Person } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

export function PeopleCard({
  person,
  sharedInterests,
}: {
  person: Person;
  sharedInterests?: number;
}) {
  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);

  function closeModal() {
    setOpen(false);
    setTimeout(() => setConnected(false), 200);
  }

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        className="overflow-hidden rounded-2xl border border-char-line bg-char-soft"
      >
        <div className="relative h-56 w-full">
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover"
          />
        </div>
        <div className="space-y-2 p-5">
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-lg text-ivory">
              {person.name}, {person.age}
            </h3>
            <span className="text-xs text-ivory/45">{person.city}</span>
          </div>
          <p className="text-sm text-ivory/55">{person.interests.join(" · ")}</p>
          {typeof sharedInterests === "number" && sharedInterests > 0 && (
            <p className="text-xs text-clay">
              {sharedInterests} shared interest{sharedInterests > 1 ? "s" : ""}
            </p>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-2 w-full rounded-full border border-ivory/25 py-2 text-sm text-ivory transition-colors hover:border-ivory/60"
          >
            Connect
          </button>
        </div>
      </motion.div>

      <Modal open={open} onClose={closeModal}>
        {connected ? (
          <div className="space-y-4 py-4 text-center">
            <h3 className="font-display text-2xl text-ivory">
              Request sent to {person.name}
            </h3>
            <p className="text-sm text-ivory/60">
              We&apos;ll let you know when they accept your connection.
            </p>
            <Button onClick={closeModal}>Done</Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl text-ivory">
                Connect with {person.name}
              </h3>
              <p className="mt-1 text-sm text-ivory/60">
                Start a conversation around {person.interests[0].toLowerCase()}.
              </p>
            </div>
            <Button className="w-full" onClick={() => setConnected(true)}>
              Send connection request
            </Button>
          </div>
        )}
      </Modal>
    </>
  );
}
