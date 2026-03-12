import { Slot as SlotPrimitive } from "radix-ui";
import React from "react";

const Slot = SlotPrimitive.Slot;

import { cn } from "@/lib/utils";

function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "screen-line-before screen-line-after border-x border-edge",
        className
      )}
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-header"
      className={cn("screen-line-after px-4", className)}
      {...props}
    />
  );
}

function PanelTitle({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      data-slot="panel-title"
      className={cn(
        "relative pb-2 font-heading text-3xl font-semibold",
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-500",
        className
      )}
      {...props}
    />
  );
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="panel-body" className={cn("p-4", className)} {...props} />
  );
}

export { Panel, PanelContent, PanelHeader, PanelTitle };
