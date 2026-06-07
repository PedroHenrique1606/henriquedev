"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import {
  CursorClick,
  Eye,
  LinkSimple,
  PauseCircle,
  TextAa,
  SelectionPlus,
  ArrowCounterClockwise,
  X,
} from "@phosphor-icons/react";
import { Accessibility } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

interface ToggleOptionProps {
  label: string;
  description: string;
  pressed: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}

function ToggleOption({
  label,
  description,
  pressed,
  onToggle,
  icon,
}: ToggleOptionProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={pressed}
      aria-label={label}
      onClick={onToggle}
      className={cn(
        "flex w-full items-start gap-2.5 rounded-xl border p-2.5 text-left transition-colors duration-200 sm:gap-3 sm:p-3",
        pressed
          ? "border-purplePrimary bg-purplePrimary/20 text-white"
          : "border-white/10 bg-white/5 text-slate-200 hover:border-purplePrimary/40 hover:bg-white/10"
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9",
          pressed ? "bg-purplePrimary text-white" : "bg-white/10 text-purplePrimary"
        )}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold leading-snug">{label}</span>
        <span className="mt-0.5 block text-xs leading-snug text-slate-400">
          {description}
        </span>
      </span>
      <span
        className={cn(
          "mt-1 h-6 w-11 shrink-0 rounded-full border transition-colors duration-200",
          pressed ? "border-purplePrimary bg-purplePrimary" : "border-white/20 bg-white/10"
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            "mt-0.5 block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
            pressed ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </span>
    </button>
  );
}

export function AccessibilityToolbar() {
  const { t } = useLanguage();
  const { settings, toggleSetting, setFontSize, resetSettings, isActive } =
    useAccessibility();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!mounted) return null;

  const fontLevels = [
    { level: 0 as const, label: t("a11y.font.normal") },
    { level: 1 as const, label: t("a11y.font.large") },
    { level: 2 as const, label: t("a11y.font.xlarge") },
  ];

  const panelContent = (
    <>
      <div className="flex shrink-0 items-start justify-between gap-3 border-b border-white/10 px-4 py-4 sm:border-b-0 sm:px-0 sm:pb-0 sm:pt-0">
        <div className="min-w-0 pr-2">
          <h2
            id={`${panelId}-title`}
            className="text-base font-bold text-white sm:text-base"
          >
            {t("a11y.title")}
          </h2>
          <p
            id={`${panelId}-description`}
            className="mt-1 text-xs leading-relaxed text-slate-400"
          >
            {t("a11y.description")}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          aria-label={t("a11y.close")}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:px-0 sm:pb-0 sm:pt-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-purplePrimary">
            {t("a11y.fontSize")}
          </p>
          <div className="grid grid-cols-3 gap-2">
            {fontLevels.map(({ level, label }) => (
              <button
                key={level}
                type="button"
                aria-pressed={settings.fontSize === level}
                onClick={() => setFontSize(level)}
                className={cn(
                  "rounded-lg border px-2 py-2.5 text-xs font-semibold transition-colors",
                  settings.fontSize === level
                    ? "border-purplePrimary bg-purplePrimary text-white"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-purplePrimary/40"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <ToggleOption
            label={t("a11y.highContrast.label")}
            description={t("a11y.highContrast.description")}
            pressed={settings.highContrast}
            onToggle={() => toggleSetting("highContrast")}
            icon={<Eye size={18} weight="bold" />}
          />
          <ToggleOption
            label={t("a11y.reduceMotion.label")}
            description={t("a11y.reduceMotion.description")}
            pressed={settings.reduceMotion}
            onToggle={() => toggleSetting("reduceMotion")}
            icon={<PauseCircle size={18} weight="bold" />}
          />
          <ToggleOption
            label={t("a11y.underlineLinks.label")}
            description={t("a11y.underlineLinks.description")}
            pressed={settings.underlineLinks}
            onToggle={() => toggleSetting("underlineLinks")}
            icon={<LinkSimple size={18} weight="bold" />}
          />
          <ToggleOption
            label={t("a11y.readableFont.label")}
            description={t("a11y.readableFont.description")}
            pressed={settings.readableFont}
            onToggle={() => toggleSetting("readableFont")}
            icon={<TextAa size={18} weight="bold" />}
          />
          <ToggleOption
            label={t("a11y.largeCursor.label")}
            description={t("a11y.largeCursor.description")}
            pressed={settings.largeCursor}
            onToggle={() => toggleSetting("largeCursor")}
            icon={<CursorClick size={18} weight="bold" />}
          />
          <ToggleOption
            label={t("a11y.highlightFocus.label")}
            description={t("a11y.highlightFocus.description")}
            pressed={settings.highlightFocus}
            onToggle={() => toggleSetting("highlightFocus")}
            icon={<SelectionPlus size={18} weight="bold" />}
          />
        </div>

        {isActive && (
          <button
            type="button"
            onClick={resetSettings}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-200"
          >
            <ArrowCounterClockwise size={16} aria-hidden="true" />
            {t("a11y.reset")}
          </button>
        )}
      </div>
    </>
  );

  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-[99] bg-black/60 md:hidden"
          aria-label={t("a11y.close")}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${panelId}-title`}
          aria-describedby={`${panelId}-description`}
          className={cn(
            "fixed z-[100] flex min-h-0 flex-col overflow-hidden bg-customBlueSecondary shadow-2xl shadow-black/40",
            "inset-x-0 bottom-0 max-h-[min(88dvh,720px)] rounded-t-2xl border-t border-purplePrimary/30",
            "md:inset-auto md:bottom-[calc(4.5rem+env(safe-area-inset-bottom))] md:left-[max(1rem,env(safe-area-inset-left))]",
            "md:max-h-[min(calc(100dvh-6rem),32rem)] md:w-[min(calc(100vw-2rem),22rem)] md:rounded-2xl md:border md:border-purplePrimary/30 md:p-4"
          )}
        >
          {panelContent}
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        aria-label={open ? t("a11y.closePanel") : t("a11y.openPanel")}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "fixed z-[100] flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purplePrimary",
          "bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))]",
          open && "max-md:pointer-events-none max-md:opacity-0",
          isActive
            ? "border-purplePrimary bg-purplePrimary text-white shadow-purplePrimary/30"
            : "border-purplePrimary/40 bg-customBlueSecondary text-purplePrimary hover:bg-purplePrimary hover:text-white"
        )}
      >
        <Accessibility size={22} aria-hidden="true" />
      </button>
    </>
  );
}
