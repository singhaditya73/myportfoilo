import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://adityasingh7.tech",
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Back to Home",
    href: "/",
  },
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/1aiTnlXwoex3FCgnT67eUKrWolgMgNTT5/view",
  },
];

export const SOURCE_CODE_GITHUB_URL = "https://github.com/singhaditya73";

export const UTM_PARAMS = {
  utm_source: "adityasingh7.tech",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
