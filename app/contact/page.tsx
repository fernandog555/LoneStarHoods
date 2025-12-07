 "use client";

import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <p className="kicker">Contact</p>
        <h1 className="section-title">Request a quote or schedule service</h1>
        <p className="section-subtitle">
          Tell us about your kitchen and cleaning needs. We&apos;ll reach out with scheduling
          options and a clear scope of work.
        </p>
      </section>

      <section className={styles.grid}>
        <div className={`${styles.card} card`}>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thanks! We will reach out shortly.");
            }}
          >
            <label className={styles.label}>
              Business name
              <input
                className={styles.input}
                type="text"
                name="business"
                placeholder="Restaurant or venue"
                required
              />
            </label>
            <label className={styles.label}>
              Contact name
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label className={styles.label}>
              Phone
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="(555) 123-4567"
                required
              />
            </label>
            <label className={styles.label}>
              Location
              <input
                className={styles.input}
                type="text"
                name="location"
                placeholder="City"
                required
              />
            </label>
            <label className={styles.label}>
              Details
              <textarea
                className={styles.textarea}
                name="details"
                rows={4}
                placeholder="Tell us about your hood system, fan access, and preferred dates."
              />
            </label>
            <button type="submit" className="btn">
              Send request
            </button>
          </form>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>Hours & availability</h3>
            <p className="text-muted">24/7 scheduling to fit your kitchen downtime.</p>
          </div>
          <div className={styles.sidebarCard}>
            <h3>Service territory</h3>
            <p className="text-muted">Dallas–Fort Worth metroplex and nearby cities.</p>
          </div>
          <div className={styles.sidebarCard}>
            <h3>Response time</h3>
            <p className="text-muted">We typically respond within one business day.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
