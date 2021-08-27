import styles from "./navbar.module.css";
import { Search, List } from "react-bootstrap-icons";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        nullBrains<span className={styles.logoDot}>.</span>
      </h1>
      <div className={styles.burgerWrapper}>
        <List className={styles.burgerIcon} />

        <div className={styles.burgerMenu}>
          <ul className={styles.menu}>
            <li className={styles.menuItems}>Home</li>
            <li className={styles.menuItems}>Features</li>
            <li className={styles.menuItems}>Blog</li>
            <li className={styles.menuItems}>Contact</li>
            <li className={styles.menuItems}>
              <Search />
            </li>
          </ul>
          <div className={styles.accountWrapper}>
            <button className={styles.signIn}>Sign In</button>
            <button className={styles.signUp}>Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
