import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const UserTitle = ({ children, to }) => {
  return (
    <Link to={`/nft/${to}`} className={styles.title}>
      {children}
    </Link>
  );
};

export default UserTitle;
