import Link from "next/link";
import styles from "./footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = "Tunis, Tunisia"; // You can make this dynamic if needed
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Tunis",
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>Zakaria Ghoudi</h2>
          <p className={styles.description}>
            +216 94 081 226 • zakariaghoudi1@gmail.com
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.links}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Connect With Me</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/Zakriaghoudi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/zakariaghoudi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/zakariaghoudi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Zakaria Ghoudi. All Rights Reserved.</p>
        <p>
          {location} • {currentTime}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
