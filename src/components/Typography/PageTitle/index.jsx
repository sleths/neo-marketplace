import styles from "./styles.module.scss";

const PageTitle = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default PageTitle;
