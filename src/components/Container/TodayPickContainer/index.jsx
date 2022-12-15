import UserTitle from "../../Typography/UserTitle";
import styles from "./styles.module.scss";

const TodayPickContainer = ({ nft }) => {
  return (
    <section className={`center ${styles.container}`}>
      <img className={styles.nft} src={nft.img} alt={nft.title} />
      <UserTitle>{nft.title}</UserTitle>
    </section>
  );
};

export default TodayPickContainer;
