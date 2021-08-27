import styles from "./features.module.css";

export default function FeatureCard({ icon, heading, subHeading }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h1 className={styles.cardHeading}>{heading}</h1>
      <h3 className={styles.cardSubHeading}>{subHeading}</h3>
    </div>
  );
}
