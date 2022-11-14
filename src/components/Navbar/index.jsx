import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.scss";

const Navbar = () => {
  const links = [
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

  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);

  const close = () => setVisible(false);

  return (
    <nav className={`center ${styles.nav}`}>
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
        {links.map((link, index) => (
          <li key={index} onClick={close}>
            <Link to={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
