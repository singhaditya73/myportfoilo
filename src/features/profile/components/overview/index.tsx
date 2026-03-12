import { MapPinIcon } from "lucide-react";

import { USER } from "@/data/user";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        <div className="flex items-center gap-4 font-mono text-sm">
          <span
            className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted"
            aria-hidden="true"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
          </span>
          <p className="text-balance">
            <span className="font-semibold text-foreground">Available</span>{" "}
            <span className="text-foreground">
              - Open to new freelance projects and collaborations
            </span>
          </p>
        </div>

        <IntroItem icon={MapPinIcon} content={USER.address} />

        <EmailItem email={USER.email} />
      </PanelContent>
    </Panel>
  );
}
