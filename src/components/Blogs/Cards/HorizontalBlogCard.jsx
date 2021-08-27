import styles from "./horizontalBlogCard.module.css";
export default function HorizontalCard({ image, tag, title, info }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} className={styles.cardImg} alt="Blog" />
      </div>
      <div className={styles.blogInfo}>
        <div className={styles.tag}>{tag}</div>
        <h1 className={styles.heading}>{title}</h1>
        <h2 className={styles.subHeading}>{info}</h2>
      </div>
    </div>
  );
}
