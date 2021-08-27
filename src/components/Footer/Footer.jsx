import styles from "./footer.module.css";
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  Slack,
} from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bottomNav}>
        <a href="#" className={styles.bottomNavLinks}>
          About
        </a>
        <a href="#" className={styles.bottomNavLinks}>
          Blog
        </a>
        <a href="#" className={styles.bottomNavLinks}>
          Team
        </a>
        <a href="#" className={styles.bottomNavLinks}>
          Pricing
        </a>
        <a href="#" className={styles.bottomNavLinks}>
          Contact
        </a>
        <a href="#" className={styles.bottomNavLinks}>
          Terms
        </a>
      </div>

      <div className={styles.socials}>
        <li className={styles.socialIconWrapper}>
          <Facebook />
        </li>
        <li className={styles.socialIconWrapper}>
          <Instagram />
        </li>
        <li className={styles.socialIconWrapper}>
          <Twitter />
        </li>
        <li className={styles.socialIconWrapper}>
          <Github />
        </li>
        <li className={styles.socialIconWrapper}>
          <Slack />
        </li>
      </div>

      <div className={styles.copySection}>
        &copy; 2021 SomeCompany, Inc. All rights reserved
      </div>
    </footer>
  );
}
