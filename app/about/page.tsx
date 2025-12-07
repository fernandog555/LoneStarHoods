import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/aboutUsPlaceholder.png"
            alt="Team at Lone Star Hoods"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroPill}>
            <span className={styles.dot} aria-hidden="true" />
            ABOUT US
          </div>
          <h1 className={styles.heroTitle}>
            Your trusted partner in vent hood <span className={styles.highlight}>cleaning</span> and{" "}
            <span className={styles.highlight}>maintenance.</span>
          </h1>
          <p className={styles.heroLead}>
            Delivering exceptional service and expertise in commercial kitchen vent cleaning and
            maintenance across Texas.
          </p>
          <div className={styles.heroMeta}>
            <div className={styles.metaCard}>
              <span className={styles.metaNumber}>20+</span>
              <span className={styles.metaLabel}>Years in DFW</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaNumber}>24/7</span>
              <span className={styles.metaLabel}>Scheduling</span>
            </div>
            <div className={styles.metaCard}>
              <span className={styles.metaNumber}>NFPA</span>
              <span className={styles.metaLabel}>96 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={styles.panel}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Our <span className={styles.highlight}>Vision</span> &{" "}
                <span className={styles.highlight}>Mission</span>
              </h2>
              <div className={styles.separator} />
              <p className={styles.lead}>
                At Lone Star Hoods, our mission is guided by a clear commitment: cleaner, safer
                kitchens.
              </p>
              <p className={`${styles.body} text-justify`}>
                As a trusted leader in hood vent cleaning, we are dedicated to ensuring the safety
                and efficiency of commercial kitchens across the DFW area. Our goal is to provide
                unmatched cleaning solutions that meet the highest standards, helping businesses
                maintain compliance and operate smoothly. To us, this work is about more than
                cleaning vents; it&apos;s about safeguarding your business, protecting your
                employees, and creating a healthier environment for everyone.
              </p>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionHeading}>Our Founding</h3>
              <div className={styles.separator} />
              <p className={`${styles.body} text-justify`}>
                Lone Star Hoods was founded in 2000 by a team of dedicated professionals with a
                shared passion for kitchen safety. Our founders recognized the need for a reliable
                hood vent cleaning service in the DFW area and set out to create a company that
                would deliver exceptional results. With over 20 years of experience in the industry,
                Lone Star Hoods has become a trusted name in commercial kitchen cleaning, known for
                our commitment to quality, safety, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
