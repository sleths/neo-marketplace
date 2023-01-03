import { Link } from "react-router-dom";
import styles from "../styles.module.scss";
const NavigateButton = ({ children, to }) => {
  return <Link to={to} className={styles.btn}>{children}</Link>;
};

export default NavigateButton;
