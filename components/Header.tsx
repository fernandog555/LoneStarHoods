"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (!event.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Lone Star Hoods home">
          <Image
            src="/LoneStarHoodsLogo.png"
            alt="Lone Star Hoods"
            width={200}
            height={64}
            priority
            className={styles.logo}
          />
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`${styles.link} ${styles.cta}`}
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
