import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const TopSellerContainer = ({ seller }) => {
  return (
    <section className={`center ${styles.col}`}>
      <p className={styles.sellerID}>{seller.id}</p>
      <img src={seller.img} alt={seller.name} />
      <article>
        <Link to="/stats">{seller.name}</Link>
        <p>{`$${seller.value.toFixed(2)}`}</p>
      </article>
      <p className={styles.percent}>{`+${seller.percent}%`}</p>
    </section>
  );
};

export default TopSellerContainer;
