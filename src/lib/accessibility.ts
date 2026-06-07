export type FontSizeLevel = 0 | 1 | 2;

export interface AccessibilitySettings {
  fontSize: FontSizeLevel;
  highContrast: boolean;
  reduceMotion: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
  largeCursor: boolean;
  highlightFocus: boolean;
}

export const ACCESSIBILITY_STORAGE_KEY = "accessibility-settings";

export const defaultAccessibilitySettings: AccessibilitySettings = {
  fontSize: 0,
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
  readableFont: false,
  largeCursor: false,
  highlightFocus: false,
};

export function parseAccessibilitySettings(raw: string | null): AccessibilitySettings {
  if (!raw) return defaultAccessibilitySettings;

  try {
    const parsed = JSON.parse(raw) as Partial<AccessibilitySettings>;
    return {
      fontSize: [0, 1, 2].includes(parsed.fontSize as number)
        ? (parsed.fontSize as FontSizeLevel)
        : 0,
      highContrast: Boolean(parsed.highContrast),
      reduceMotion: Boolean(parsed.reduceMotion),
      underlineLinks: Boolean(parsed.underlineLinks),
      readableFont: Boolean(parsed.readableFont),
      largeCursor: Boolean(parsed.largeCursor),
      highlightFocus: Boolean(parsed.highlightFocus),
    };
  } catch {
    return defaultAccessibilitySettings;
  }
}

export function applyAccessibilitySettings(settings: AccessibilitySettings) {
  if (typeof document === "undefined") return;

  const html = document.documentElement;

  html.dataset.a11yFontSize = String(settings.fontSize);
  html.classList.toggle("a11y-high-contrast", settings.highContrast);
  html.classList.toggle("a11y-reduce-motion", settings.reduceMotion);
  html.classList.toggle("a11y-underline-links", settings.underlineLinks);
  html.classList.toggle("a11y-readable-font", settings.readableFont);
  html.classList.toggle("a11y-large-cursor", settings.largeCursor);
  html.classList.toggle("a11y-highlight-focus", settings.highlightFocus);
}

export function hasAnyAccessibilitySetting(settings: AccessibilitySettings) {
  return (
    settings.fontSize !== 0 ||
    settings.highContrast ||
    settings.reduceMotion ||
    settings.underlineLinks ||
    settings.readableFont ||
    settings.largeCursor ||
    settings.highlightFocus
  );
}
