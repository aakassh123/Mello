import { Badge as BadgeType } from "@/types";
import { cx } from "@/lib/utils";

const badgeStyles: Record<BadgeType, string> = {
  TRENDING: "bg-clay text-ivory",
  TONIGHT: "bg-ivory text-char",
  NEW: "bg-moss text-ivory",
  "FEW SPOTS LEFT": "bg-char text-clay border border-clay/50",
  POPULAR: "bg-beige text-char",
  "INVITE ONLY": "bg-char text-ivory border border-ivory/40",
};

export function Badge({ label }: { label: BadgeType }) {
  return (
    <span
      className={cx(
        "rounded-full px-3 py-1 text-[11px] font-semibold",
        badgeStyles[label]
      )}
    >
      {label}
    </span>
  );
}
