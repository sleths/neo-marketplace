import { useState } from "react";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { pageLinks } from "../../../utils/helpers";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);

  const close = () => setVisible(false);

  return (
    <nav className={`center max-width ${styles.nav}`}>
      <Link to="/">
        <Logo />
      </Link>

      <DensitySmallIcon className="pointer" onClick={open} />

      <ul className={`${styles.navLinks} ${visible ? styles.visible : ""}`}>
        <li
          className={`pointer ${styles.closeIcon} ${
            visible ? styles.visible : ""
          }`}
        >
          <CloseIcon onClick={close} />
        </li>
        {pageLinks.map((link, index) => (
          <li key={index} onClick={close}>
            <NavLink
              to={link.link}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
