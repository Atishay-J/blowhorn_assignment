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
        <a href="#" className="bottomNavLinks">
          About
        </a>
        <a href="#" className="bottomNavLinks">
          Blog
        </a>
        <a href="#" className="bottomNavLinks">
          Team
        </a>
        <a href="#" className="bottomNavLinks">
          Pricing
        </a>
        <a href="#" className="bottomNavLinks">
          Contact
        </a>
        <a href="#" className="bottomNavLinks">
          Terms
        </a>
      </div>

      <div className={styles.socials}>
        <li className="socialIconWrapper">
          <Facebook />
        </li>
        <li className="socialIconWrapper">
          <Instagram />
        </li>
        <li className="socialIconWrapper">
          <Twitter />
        </li>
        <li className="socialIconWrapper">
          <Github />
        </li>
        <li className="socialIconWrapper">
          <Slack />
        </li>
      </div>

      <div className={styles.copySection}>
        &copy; 2021 SomeCompany, Inc. All rights reserved
      </div>
    </footer>
  );
}
