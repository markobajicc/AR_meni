import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function DishThumb({
  icon: Icon,
  size = "sm",
  className,
}: {
  icon: LucideIcon;
  size?: "sm" | "lg";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-clay-800 to-background",
        size === "sm" ? "h-20 w-20" : "aspect-square w-full rounded-3xl",
        className
      )}
    >
      <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-ember-500/25 blur-2xl" />
      <Icon
        className={cn(
          "relative text-ember-300/90",
          size === "sm" ? "h-7 w-7" : "h-14 w-14"
        )}
        strokeWidth={1.5}
      />
    </div>
  );
}
