"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

import { Panel, PanelContent } from "@/features/profile/components/panel";

export function GithubCalendarSection() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Panel>
        <PanelContent className="flex min-h-[160px] justify-center overflow-hidden px-6 pt-6 pb-6">
          <div className="h-32 w-full animate-pulse rounded-md bg-muted/20" />
        </PanelContent>
      </Panel>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Panel>
      <PanelContent className="flex justify-center px-4 pt-6 pb-6 md:px-8">
        <div className="scrollbar-thin scrollbar-thumb-zinc-500/20 scrollbar-track-transparent flex w-full justify-center overflow-x-auto pb-4">
          <GitHubCalendar
            username="singhaditya73"
            colorScheme={isDark ? "dark" : "light"}
            blockSize={10}
            blockMargin={3}
            fontSize={12}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </PanelContent>
    </Panel>
  );
}
