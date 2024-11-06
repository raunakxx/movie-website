import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>MovieHub</h1>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <a href="#watched" className={styles.navLink}>
            Watched
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#watching" className={styles.navLink}>
            Watching
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#wishlist" className={styles.navLink}>
            Wishlist
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#genre" className={styles.navLink}>
            Genre
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#tv seires" className={styles.navLink}>
            Tv seires
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
