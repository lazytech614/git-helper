export type Browser = "Chrome" | "Firefox" | "Safari" | "Edge" | "Arc";

export type ExtensionCategory = "Productivity" | "DevTools" | "Privacy" | "AI" | "Design";

export interface BrowserExtension {
  id: string;
  slug: string;

  name: string;
  description: string;

  publisher: string;

  category: ExtensionCategory[];

  browsers: Browser[];

  storeUrls: Partial<Record<Browser, string>>;

  installs: number;

  rating: number;

  ratingCount: number;

  tags: string[];

  repoUrl?: string;

  website?: string;

  logo?: string;

  isFree: boolean;

  isOpenSource: boolean;

  featured?: boolean;

  lastUpdated: string;
}
