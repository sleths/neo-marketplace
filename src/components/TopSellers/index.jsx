import styles from "./styles.module.scss";
import { top_sellers } from "../../data";

const TopSellerContainer = ({ seller }) => {
  return (
    <section className={`center ${styles.col}`}>
      <p>{seller.id}</p>
      <img src={seller.img} alt={seller.name} />
      <article>
        <h3>{seller.name}</h3>
        <p>{`$${seller.value.toFixed(2)}`}</p>
      </article>
      <p className={styles.percent}>{`+${seller.percent}%`}</p>
    </section>
  );
};

const TopSellers = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Top selling creators</h2>
      <div className={styles.container}>
        {top_sellers.map((seller) => (
          <TopSellerContainer seller={seller} />
        ))}
      </div>
    </section>
  );
};

export default TopSellers;
