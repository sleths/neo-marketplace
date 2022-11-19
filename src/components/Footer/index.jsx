import { NavLink } from "react-router-dom";
import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PublicIcon from "@mui/icons-material/Public";
import links from "./Links";
import styles from "./styles.module.scss";
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = ({ target }) => setEmail(target.value);

  const pages = [
    { text: "Explore", link: "/" },
    {
      text: "Stats",
      link: "/stats",
    },
    {
      text: "Drops",
      link: "/drops",
    },
    {
      text: "Activity",
      link: "/activity",
    },
  ];

  return (
    <footer className={styles.footer}>
      {/**
       * Wrapper
       */}
      <div className={styles.wrapper}>
        <section className={styles.container}>
          {/**
           * First Grid
           */}
          <section className={styles.firstGrid}>
            <div className={styles.emailContainer}>
              <h6>Subscribe to updates</h6>
              <div>
                <label
                  htmlFor="email"
                  className={email === "" ? styles.empty : styles.full}
                >
                  Enter your e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                />
                <MailOutlineIcon />
              </div>
            </div>
            <div className={`center ${styles.iconContainer}`}>
              <h6>Follow Us</h6>
              <ul className={`center ${styles.icons}`}>
                {links.map((link) => (
                  <li className="pointer">{link}</li>
                ))}
              </ul>
            </div>
          </section>
          {/**
           * Social Links
           */}
          <ul className={styles.pageLinks}>
            <li className={styles.linkTitle}>Marketplace</li>
            {pages.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          {/**
           * Text Area
           */}
          <section className={styles.textContainer}>
            <h6>Region</h6>
            <p>
              The world's first marketplace for collectibles and non-fungible
              tokens NFTs where anything is possible and all are welcome
            </p>
          </section>
        </section>
        {/**
         * Second Grid
         */}
        <section className={`center ${styles.bottom}`}>
          <ul>
            <li>
              <NavLink to="#" className={styles.bottomLink}>
                Privacy Policy
              </NavLink>
            </li>
            <li className={styles.hideMobile}>
              <NavLink to="#" className={styles.bottomLink}>
                License
              </NavLink>
            </li>
            <li className={styles.hideMobile}>
              <NavLink to="#" className={styles.bottomLink}>
                API
              </NavLink>
            </li>
            <li className={styles.hideMobile}>© 2021 All rights reserved</li>
          </ul>
          <div>
            <PublicIcon />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
