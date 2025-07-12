import { BrandContextMenu } from "@/components/brand-context-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle></PanelTitle>
      </PanelHeader>

      <BrandContextMenu>
        <div
          className={cn(
            "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
            "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
            "bg-zinc-950/0.75 dark:bg-white/0.75"
          )}
        >
          <div className="grid grid-cols-[2rem_1fr]">
            <div className="flex h-20 items-center justify-center border-r border-edge bg-background">
              <span className="-rotate-90 font-mono text-sm text-muted-foreground select-none">
                Hey..!
              </span>
            </div>

            <div className="screen-line-after flex items-center justify-center pr-10 after:z-1">
              <p className="mb-1.9 text-center font-mono text-sm text-balance text-muted-foreground">
                <a
                  className="link"
                  href="https://drive.google.com/file/d/1X0G5mY079qBsfVek_tw8syVxdMq48Phs/view?usp=drive_link"
                  target="_blank"
                  rel="noopener"
                >
                  View Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </BrandContextMenu>

      <div className="flex h-12 items-center justify-center pb-px">
        <Button variant="secondary" asChild></Button>
      </div>
    </Panel>
  );
}
