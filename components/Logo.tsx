"use client";

import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div
      className={[styles.logo, className].filter(Boolean).join(" ")}
      role="img"
      aria-label="Lone Star Hoods"
    >
      <span className={styles.word} aria-hidden="true">
        Lone
      </span>
      <span className={styles.wordAccent} aria-hidden="true">
        Star
      </span>
      <span className={styles.word} aria-hidden="true">
        Hoods
      </span>
    </div>
  );
}

