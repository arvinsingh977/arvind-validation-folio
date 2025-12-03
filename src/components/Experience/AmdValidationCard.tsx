import React from "react";
import styles from "./AmdValidationCard.module.css";

type Props = {
  startEnd?: string; // e.g. "2022 — Present"
  location?: string;
  highlights?: string[]; // override highlights if desired
};

const defaultHighlights = [
  "Plan and execute validation strategies for SoC/board bring-up, system stability, and feature verification.",
  "Design, implement, and maintain automated test frameworks and regression suites (Python, shell, CI integration).",
  "Work closely with silicon bring-up teams, firmware, and software developers to identify and triage root causes.",
  "Develop FPGA-based prototypes and validation harnesses for early functional verification.",
  "Create clear test plans, reproducible bug reports, and validation metrics to track product readiness.",
];

export default function AmdValidationCard({
  startEnd = "YYYY — Present",
  location = "[City, Country]",
  highlights = defaultHighlights,
}: Props) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>Senior Validation Engineer — AMD</h3>
        <div className={styles.meta}>
          <span>{location}</span>
          <span className={styles.sep}>•</span>
          <time>{startEnd}</time>
        </div>
      </header>

      <section className={styles.summary}>
        <p>
          Senior Validation Engineer responsible for full-system validation of SoC/FPGA platforms. Led
          hardware bring-up, firmware integration, and automated test infrastructure efforts.
        </p>
      </section>

      <section>
        <h4>Key Responsibilities</h4>
        <ul>
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Technologies & Tools</h4>
        <p>SoC bring-up, FPGA prototyping, Python, Shell, CI/CD, JTAG, logic analyzers, serial consoles.</p>
      </section>
    </article>
  );
}