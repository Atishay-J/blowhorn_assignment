import styles from "./verticalBlogCard.module.css";

export default function VerticalBlogCard({
  image,
  tag,
  title,
  info,
  contrastColor,
}) {
  return (
    <div className={styles.card} style={{ background: contrastColor }}>
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
