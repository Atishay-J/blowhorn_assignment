import { Twitter, Github } from "react-bootstrap-icons";
import styles from "./team.module.css";
export default function TeamCard({ image, name, title, twitter, github }) {
  return (
    <div className={styles.teamCard}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img src={image} alt={name} className={styles.cardImage} />
        </div>
      </div>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.socialsWrapper}>
        <a href={twitter} className={styles.socials}>
          <Twitter />
        </a>
        <a href={github} className={styles.socials}>
          <Github />
        </a>
      </div>
    </div>
  );
}
