import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const UserTitle = ({ children }) => {
  return (
    <Link
      to={`/${children.trim().replaceAll(" ", "-").toLowerCase()}`}
      className={styles.title}
    >
      {children}
    </Link>
  );
};

export default UserTitle;
