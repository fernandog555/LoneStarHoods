import styles from "./page.module.css";

const serviceAreas = [
  "Dallas",
  "Fort Worth",
  "Arlington",
  "Plano",
  "Irving",
  "Garland",
  "Grand Prairie",
  "McKinney",
  "Frisco",
  "Mesquite",
  "Carrollton",
  "Denton",
];

const services = [
  "Complete hood, duct, and fan degreasing",
  "Filter replacement and cleaning",
  "Exhaust fan inspection and maintenance",
  "Grease containment and rooftop protection",
  "Access panel installation and cleaning",
  "Before/after photo documentation",
];

export default function ServicesPage() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <div>
          <p className="kicker">What we do</p>
          <h1 className="section-title">Services tailored for busy commercial kitchens</h1>
          <p className="section-subtitle">
            NFPA 96 compliant hood cleaning, fan maintenance, and preventative care that keeps your
            kitchen safe, compliant, and open for business.
          </p>
        </div>
        <div className={styles.badges}>
          <span className="pill">Licensed & insured</span>
          <span className="pill">Night & weekend scheduling</span>
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.servicesList}>
          <h2>Core services</h2>
          <ul className="stack">
            {services.map((item) => (
              <li key={item} className={styles.serviceItem}>
                <span className={styles.bullet} aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted">
            Every visit includes a detailed post-job report with photos, notes, and compliance
            highlights for your records and insurance.
          </p>
        </div>

        <div className={styles.serviceAreas}>
          <div className={styles.serviceAreasHeader}>
            <h3>Service areas</h3>
            <p className="text-muted">Greater Dallas–Fort Worth metroplex</p>
          </div>
          <div className={styles.areaGrid}>
            {serviceAreas.map((area) => (
              <div key={area} className={styles.areaCard}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
