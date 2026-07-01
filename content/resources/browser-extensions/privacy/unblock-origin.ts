import { BrowserExtension } from "../types";

export const uBlockOrigin: BrowserExtension = {
  id: "ublock-origin",
  slug: "ublock-origin",

  name: "uBlock Origin",

  description: "An efficient wide-spectrum content blocker.",

  publisher: "Raymond Hill",

  category: ["Privacy", "Productivity"],

  browsers: ["Chrome", "Firefox", "Edge"],

  storeUrls: {
    Chrome: "...",
    Firefox: "...",
    Edge: "...",
  },

  installs: 40000000,

  rating: 4.8,

  ratingCount: 52000,

  tags: ["ad-blocker", "privacy", "security"],

  repoUrl: "...",

  isFree: true,

  isOpenSource: true,

  featured: true,

  lastUpdated: "2024-02-05",
};
