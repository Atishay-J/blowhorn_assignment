import styles from "./navbar.module.css";

import { Search, List, XLg } from "react-bootstrap-icons";
import { useState } from "react";
export default function BurgerMenu() {
  const [showModal, setShowModal] = useState(false);

  //   var modal = document.getElementById("myModal");

  //   // Get the button that opens the modal
  //   var btn = document.getElementById("myBtn");

  //   // Get the <span> element that closes the modal
  //   var span = document.getElementsByClassName("close")[0];

  //   // When the user clicks the button, open the modal
  //   btn.onclick = function () {
  //     modal.style.display = "block";
  //   };

  //   // When the user clicks on <span> (x), close the modal
  //   span.onclick = function () {
  //     modal.style.display = "none";
  //   };

  //   // When the user clicks anywhere outside of the modal, close it
  //   window.onclick = function (event) {
  //     if (event.target == modal) {
  //       modal.style.display = "none";
  //     }
  //   };

  function closeMenu(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setShowModal((prev) => !prev);
    }
  }

  return (
    <>
      <Search />
      <List
        className={styles.burgerIcon}
        onClick={() => setShowModal((prev) => !prev)}
      />

      <div
        className={styles.burgerContainer}
        onClick={(event) => closeMenu(event)}
        style={{ display: showModal ? "block" : "none" }}
      >
        <ul className={styles.burgerMenu}>
          <XLg
            className={styles.closeBtn}
            onClick={() => setShowModal((prev) => !prev)}
          />
          <li className={styles.menuItems}>Home</li>
          <li className={styles.menuItems}>Features</li>
          <li className={styles.menuItems}>Blog</li>
          <li className={styles.menuItems}>Contact</li>
        </ul>
      </div>
    </>
  );
}
