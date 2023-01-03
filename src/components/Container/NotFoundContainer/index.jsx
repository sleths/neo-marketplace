import UserTitle from "../../../components/Typography/UserTitle";
import errorImg from "../../../assets/notFound.webp";
import NavigateButton from "../../../components/Button/NavigateButton";

import styles from "./styles.module.scss";

const NotFoundContainer = () => {
  return (
    <section className="wrapper">
      <h1 className={styles.glitch}>4O4 ERROR</h1>
      <section className={`center ${styles.container}`}>
        <img className={styles.nft} src={errorImg} alt="Page Not Found" />
        <UserTitle to="#">Not Found</UserTitle>
        <p>by you</p>
        <div className={`center ${styles.btn}`}>
          <NavigateButton to="/">Home</NavigateButton>
        </div>
      </section>
    </section>
  );
};

export default NotFoundContainer;
