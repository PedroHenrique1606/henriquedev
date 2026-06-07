"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  AccessibilitySettings,
  ACCESSIBILITY_STORAGE_KEY,
  applyAccessibilitySettings,
  defaultAccessibilitySettings,
  FontSizeLevel,
  parseAccessibilitySettings,
} from "@/lib/accessibility";

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  toggleSetting: (key: Exclude<keyof AccessibilitySettings, "fontSize">) => void;
  setFontSize: (level: FontSizeLevel) => void;
  resetSettings: () => void;
  isActive: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(
  undefined
);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(
    defaultAccessibilitySettings
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = parseAccessibilitySettings(
      localStorage.getItem(ACCESSIBILITY_STORAGE_KEY)
    );
    setSettings(saved);
    applyAccessibilitySettings(saved);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    applyAccessibilitySettings(settings);
    localStorage.setItem(ACCESSIBILITY_STORAGE_KEY, JSON.stringify(settings));

    if (settings.reduceMotion && window.locomotiveScrollInstance) {
      window.locomotiveScrollInstance.destroy();
      window.locomotiveScrollInstance = undefined;
    }
  }, [settings, hydrated]);

  const toggleSetting = useCallback(
    (key: Exclude<keyof AccessibilitySettings, "fontSize">) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    []
  );

  const setFontSize = useCallback((level: FontSizeLevel) => {
    setSettings((prev) => ({ ...prev, fontSize: level }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings(defaultAccessibilitySettings);
  }, []);

  const isActive = useMemo(() => {
    return (
      settings.fontSize !== 0 ||
      settings.highContrast ||
      settings.reduceMotion ||
      settings.underlineLinks ||
      settings.readableFont ||
      settings.largeCursor ||
      settings.highlightFocus
    );
  }, [settings]);

  return (
    <AccessibilityContext.Provider
      value={{ settings, toggleSetting, setFontSize, resetSettings, isActive }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
