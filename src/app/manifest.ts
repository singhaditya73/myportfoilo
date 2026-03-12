import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "https://raw.githubusercontent.com/singhaditya73/Blogging-app/main/AS-6-19-2025%20(1).jpg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "https://raw.githubusercontent.com/singhaditya73/Blogging-app/main/AS-6-19-2025%20(1).jpg",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "https://raw.githubusercontent.com/singhaditya73/Blogging-app/main/AS-6-19-2025%20(1).jpg",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "https://raw.githubusercontent.com/singhaditya73/Blogging-app/main/AS-6-19-2025%20(1).jpg",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "https://raw.githubusercontent.com/singhaditya73/Blogging-app/refs/heads/main/screenshot-mobile-dark.webp",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://raw.githubusercontent.com/singhaditya73/Blogging-app/refs/heads/main/screenshot-mobile-light.webp",
        type: "image/webp",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "http://raw.githubusercontent.com/singhaditya73/Blogging-app/refs/heads/main/screenshot-desktop-dark.webp",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "https://raw.githubusercontent.com/singhaditya73/Blogging-app/refs/heads/main/screenshot-desktop-light.webp",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
