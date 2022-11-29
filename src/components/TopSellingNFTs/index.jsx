import { top_sellers } from "../../data";

import { ReactComponent as Blockchain } from "../../assets/icons/blockchain.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as Collections } from "../../assets/icons/collections.svg";

import StatTag from "../Tag/StatTag";

import styles from "./styles.module.scss";

const TopSellingNFTRow = ({ seller, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={seller.img} alt={seller.name} />
      </td>
      <td>{seller.name}</td>
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
      <table className={styles.table}>
        <tbody>
          {top_sellers.map((seller, index) => {
            return <TopSellingNFTRow seller={seller} index={index} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default TopSellingNFTs;
