"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Portfolio
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        {/* Navigation Links */}
        <ul
          className={
            isOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu
          }
        >
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.activeLink : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.navLink} ${
                pathname === "/about" ? styles.activeLink : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${styles.navLink} ${
                pathname === "/projects" ? styles.activeLink : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${styles.navLinkCta} ${
                pathname === "/contact" ? styles.activeCta : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
