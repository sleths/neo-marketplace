import { top_sellers } from "../../../data";
import SectionTitle from "../../Typography/SectionTitle";
import TopSellerContainer from "../../Container/TopSellerContainer";

import styles from "./styles.module.scss";

const TopSellers = () => {
  return (
    <section className="wrapper">
      <SectionTitle>Top selling creators</SectionTitle>
      <div className={styles.container}>
        {top_sellers.map((seller) => (
          <TopSellerContainer seller={seller} key={seller.id} />
        ))}
      </div>
    </section>
  );
};

export default TopSellers;
