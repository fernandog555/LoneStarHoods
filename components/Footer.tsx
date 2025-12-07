import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.title}>&copy; {new Date().getFullYear()} Lone Star Hoods, LLC</p>
          <p className={styles.tagline}>Cleaner, safer kitchens across DFW.</p>
        </div>
      </div>
    </footer>
  );
}
