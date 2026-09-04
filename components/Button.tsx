import { cx } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface BaseProps {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps & { href: string };

const styles = {
  primary:
    "bg-ivory text-char hover:bg-beige",
  secondary:
    "border border-ivory/30 text-ivory hover:border-ivory/70",
  ghost: "text-ivory/80 hover:text-ivory",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 disabled:opacity-40";

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps | LinkProps) {
  if (href) {
    return (
      <Link href={href} className={cx(base, styles[variant], className)}>
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cx(base, styles[variant], className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
