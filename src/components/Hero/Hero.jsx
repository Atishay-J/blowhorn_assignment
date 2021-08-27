import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Start Crafting Your</h1>
      <h2 className={styles.subHeading}>Next Great Idea</h2>

      <p className={styles.para}>
        Simplifying the creation of landing pages, blog pages, <br />
        application pages and so much more!
      </p>

      <button className={styles.button}>Purchase Now</button>
      <a href="#" className={styles.learnMore}>
        Learn More
      </a>
    </div>
  );
}
