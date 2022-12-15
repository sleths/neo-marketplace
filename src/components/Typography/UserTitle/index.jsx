import { Link } from "react-router-dom";
import { createSlug } from "../../../utils/helpers";

import styles from "./styles.module.scss";

const UserTitle = ({ children }) => {
  return (
    <Link to={createSlug("nft", children)} className={styles.title}>
      {children}
    </Link>
  );
};

export default UserTitle;
