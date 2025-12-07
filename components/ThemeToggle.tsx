"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import styles from "./ThemeToggle.module.css";

type ThemeChoice = "light" | "dark";

const LABELS: Record<ThemeChoice, string> = {
  light: "Light",
  dark: "Dark",
};

const ICONS: Record<ThemeChoice, string> = {
  light: "☀️",
  dark: "🌙",
};

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [mode, setMode] = useState<ThemeChoice>("dark");
  const [hasOverride, setHasOverride] = useState(false);
  const mediaRef = useRef<MediaQueryList>();
  const overrideRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    mediaRef.current = media;

    const applySystem = () => {
      if (!overrideRef.current) {
        setMode(media.matches ? "dark" : "light");
      }
    };

    applySystem();

    try {
      const stored = window.localStorage.getItem("theme-preference");
      if (stored === "light" || stored === "dark") {
        overrideRef.current = true;
        setHasOverride(true);
        setMode(stored);
      }
    } catch (error) {
      console.warn("Unable to read saved theme preference", error);
    }

    media.addEventListener("change", applySystem);
    return () => media.removeEventListener("change", applySystem);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (!hasOverride) {
      document.documentElement.removeAttribute("data-theme");
      try {
        window.localStorage.removeItem("theme-preference");
      } catch (error) {
        console.warn("Unable to clear theme preference", error);
      }
      return;
    }

    document.documentElement.dataset.theme = mode;
    try {
      window.localStorage.setItem("theme-preference", mode);
    } catch (error) {
      console.warn("Unable to persist theme preference", error);
    }
  }, [mode, hasOverride]);

  const handleToggle = () => {
    if (!overrideRef.current) {
      overrideRef.current = true;
      setHasOverride(true);
    }
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleReset = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    overrideRef.current = false;
    setHasOverride(false);
    const prefersDark = mediaRef.current?.matches ?? false;
    setMode(prefersDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      className={[styles.toggle, className].filter(Boolean).join(" ")}
      onClick={handleToggle}
      onContextMenu={handleReset}
      aria-label={`Toggle color theme (current: ${LABELS[mode]} mode${
        hasOverride ? "" : ", following system preference"
      })`}
      title="Click to toggle Light/Dark. Right-click to follow system preference."
      data-mode={mode}
      data-overridden={hasOverride}
    >
      <span aria-hidden="true" className={styles.icon}>
        {ICONS[mode]}
      </span>
      <span className={styles.label}>{LABELS[mode]}</span>
    </button>
  );
}

