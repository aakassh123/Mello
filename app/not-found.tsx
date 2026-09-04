import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="font-display text-8xl text-ivory/20">404</p>
      <h1 className="mt-4 font-display text-3xl text-ivory">
        This experience doesn&apos;t exist.
      </h1>
      <p className="mt-2 text-ivory/55">
        It might have ended, or the link might be wrong.
      </p>
      <div className="mt-8">
        <Button href="/experiences">Browse experiences</Button>
      </div>
    </div>
  );
}
