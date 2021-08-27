import styles from "./navbar.module.css";

import { Search, List, XLg } from "react-bootstrap-icons";
import { useState } from "react";
export default function BurgerMenu() {
  const [showModal, setShowModal] = useState(false);

  function closeMenu(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setShowModal((prev) => !prev);
    }
  }

  return (
    <div className={styles.burgerWrapper}>
      <Search className={styles.searchIcon} />
      <List
        className={styles.burgerIcon}
        onClick={() => setShowModal((prev) => !prev)}
      />

      <div
        className={styles.burgerContainer}
        onClick={(event) => closeMenu(event)}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className={styles.menuWrapper}>
          <XLg
            className={styles.closeBtn}
            onClick={() => setShowModal((prev) => !prev)}
          />
          <ul className={styles.burgerMenu}>
            <li className={styles.menuItems}>Home</li>
            <li className={styles.menuItems}>Features</li>
            <li className={styles.menuItems}>Blog</li>
            <li className={styles.menuItems}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
