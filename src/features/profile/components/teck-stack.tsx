import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

// ✅ Full map of unhosted icons using Iconify icon names (from simple-icons set)
const UNHOSTED_ICONS: Record<string, string> = {
  prisma: "simple-icons:prisma",
  solidity: "simple-icons:solidity",
  cplusplus: "simple-icons:cplusplus",
  c: "simple-icons:c",
  mysql: "simple-icons:mysql",
  express: "simple-icons:express",
  cloudflareworkers: "simple-icons:cloudflare",
  axios: "simple-icons:axios",
  react: "simple-icons:react",
  html5: "simple-icons:html5",
  css3: "simple-icons:css3",
  json: "simple-icons:json",
  numpy: "simple-icons:numpy",
  pandas: "simple-icons:pandas",
  scikitlearn: "simple-icons:scikitlearn",
  tensorflow: "simple-icons:tensorflow",
  visualstudiocode: "simple-icons:visualstudiocode",
  postman: "simple-icons:postman",
  git: "simple-icons:git",
  github: "simple-icons:github",
  pytorch: "simple-icons:pytorch",
  langchain: "simple-icons:langchain",
  postgresql: "simple-icons:postgresql",
  firebase: "simple-icons:firebase",
  googlecloud: "simple-icons:googlecloud",
  pinecone: "simple-icons:pinecone",
  cloudflare: "simple-icons:cloudflare",
  linux: "simple-icons:linux",
};

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <div className="flex flex-wrap gap-6 select-none">
          {TECH_STACK.map((item) => {
            const hoverClasses =
              "transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(100,150,255,0.4)]";

            // Render from Iconify for unhosted icons
            if (item.isHosted === false) {
              const iconName = UNHOSTED_ICONS[item.key];

              return (
                <SimpleTooltip key={item.key} content={item.title}>
                  <a
                    className={hoverClasses}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.title}
                  >
                    {iconName ? (
                      <Icon icon={iconName} width={32} height={32} />
                    ) : (
                      <span className="text-gray-400">No icon</span>
                    )}
                  </a>
                </SimpleTooltip>
              );
            }

            // Render hosted icons
            return (
              <SimpleTooltip key={item.key} content={item.title}>
                <a
                  className={hoverClasses}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                >
                  {item.theme ? (
                    <>
                      <Image
                        src={`https://assets.chanhdai.com/images/tech-stack-icons/${item.key}-light.svg`}
                        alt={`${item.title} light icon`}
                        width={32}
                        height={32}
                        className="hidden [html.light_&]:block"
                        unoptimized
                      />
                      <Image
                        src={`https://assets.chanhdai.com/images/tech-stack-icons/${item.key}-dark.svg`}
                        alt={`${item.title} dark icon`}
                        width={32}
                        height={32}
                        className="hidden [html.dark_&]:block"
                        unoptimized
                      />
                    </>
                  ) : (
                    <Image
                      src={`https://assets.chanhdai.com/images/tech-stack-icons/${item.key}.svg`}
                      alt={`${item.title} icon`}
                      width={32}
                      height={32}
                      unoptimized
                    />
                  )}
                </a>
              </SimpleTooltip>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
