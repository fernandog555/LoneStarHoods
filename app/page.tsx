import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/van.jpg"
            alt="The Lone Star Hoods work van"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <span className="pill">DFW | 20+ years of field experience</span>
          <h1 className={styles.heroTitle}>Professional Vent Hood Cleaning Service</h1>
          <p className={styles.heroLead}>
            Over 20 years of commercial kitchen exhaust cleaning experience in the Dallas-Fort Worth
            area. NFPA 96 compliant, detail-focused, and always on schedule.
          </p>
          <div className={styles.heroActions}>
            <Link href="/services" className="btn">
              View Our Services
            </Link>
            <Link href="/contact" className="btn secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyImage}>
              <Image
                src="/placeholder.png"
                alt="Technicians cleaning a kitchen hood system"
                width={640}
                height={480}
              />
            </div>
            <div className={styles.storyContent}>
              <h2 className={styles.storyTitle}>
                Expert <span className={styles.highlight}>Cleaning</span>. Consistently{" "}
                <span className={styles.highlight}>Exceptional</span>.
              </h2>
              <div className={styles.separator} />
              <p className={`${styles.storyText} text-justify`}>
                When it comes to the cleaning and upkeep of your kitchen exhaust system, it&apos;s
                crucial to entrust the task to skilled and certified professionals. Lone Star Hoods
                stands as the foremost authority in delivering commercial kitchen cleaning and
                preventive maintenance solutions. Our goal is to ensure the utmost satisfaction of
                our valued customers. Our team of proficient cleaners possesses extensive training
                and a wealth of experience within the industry.
              </p>
              <div className={styles.badges}>
                <span className="pill">NFPA 96 compliant</span>
                <span className="pill">Photo proof after every job</span>
                <span className="pill">24/7 scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
