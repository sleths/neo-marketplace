import { top_sellers } from "../../data";

import { ReactComponent as Blockchain } from "../../assets/icons/blockchain.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as Collections } from "../../assets/icons/collections.svg";

import StatTag from "../Tag/StatTag";

import styles from "./styles.module.scss";

const TopSellingNFTRow = ({ seller, index }) => {
  return (
    <tr>
      <td className={styles.name}>{index + 1}</td>
      <td className={styles.image}>
        <img src={seller.img} alt={seller.name} />
      </td>
      <td className={styles.name}>{seller.name}</td>
      <td>{seller.value}</td>
      <td>{seller.twentyFour}</td>
      <td>{seller.seven}</td>
      <td>{seller.floorPrice}</td>
      <td>{seller.owners}</td>
    </tr>
  );
};

const TopSellingNFTs = () => {
  const tags = [
    {
      icon: <Blockchain />,
      text: "Blockchain",
    },
    {
      icon: <Category />,
      text: "Category",
    },
    {
      icon: <Collections />,
      text: "Collections",
    },
  ];
  return (
    <section className={styles.container}>
      <h1>Top selling NFTs</h1>
      <section className={`center ${styles.tags}`}>
        {tags.map((tag) => (
          <StatTag data={tag} />
        ))}
      </section>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.hiddenHeader}>ID</th>
              <th className={styles.hiddenHeader}>Avatar</th>
              <th className={styles.firstHeader}>Collections</th>
              <th>Volume</th>
              <th>24h %</th>
              <th>7h %</th>
              <th>Floor price</th>
              <th>Owners</th>
            </tr>
          </thead>
          <tbody>
            {top_sellers.map((seller, index) => {
              return <TopSellingNFTRow seller={seller} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopSellingNFTs;
