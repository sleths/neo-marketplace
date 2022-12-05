import { useEffect, useState, useRef } from "react";

import { ReactComponent as Blockchain } from "../../assets/icons/blockchain.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as Collections } from "../../assets/icons/collections.svg";
import { ReactComponent as Eth } from "../../assets/icons/eth.svg";

import StatTag from "../Tag/StatTag";

import { top_sellers } from "../../data";
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
      <td className={styles.percentage}>{`+${seller.twentyFour}%`}</td>
      <td className={styles.percentage}>{`+${seller.seven}%`}</td>
      <td className={styles.eth}>
        <Eth />
        <span>{seller.floorPrice}</span>
      </td>
      <td className={styles.owner}>{seller.owners}</td>
    </tr>
  );
};

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

const TopSellingNFTs = () => {
  const [data, setData] = useState(top_sellers);

  const [sort, setSort] = useState({ col: "", order: "ASC" });

  const prevCol = useRef();

  const handleOrder = (col) => {
    switch (sort.order) {
      case "ASC":
        return setSort({ col: col, order: "DESC" });
      case "DESC":
        return setSort({ col: col, order: null });
      case null:
        return setSort({ col: col, order: "ASC" });
    }
  };

  const handleSortSwitch = (col) => {
    /*  if (col !== "" && prevCol.current === col) {
      handleOrder()
    } else {
      setSort({ col: col, order: "ASC" });
    } */

    handleOrder(col);
  };

  const sortData = (col) => {
    const sortable = [...data];
    sortable.sort((a, b) => {
      if (sort.order === "ASC") return b[col] - a[col];
      else if (sort.order === "DESC") return a[col] - b[col];
    });
    handleSortSwitch(col);
    setData(sort.order === null ? top_sellers : sortable);
  };

  useEffect(() => {
    prevCol.current = sort.col;
  }, [sort.col]);

  useEffect(() => {
    console.log(sort);
  }, [sort]);

  return (
    <section className={styles.container}>
      <h1>Top selling NFTs</h1>
      <p>{prevCol.current}</p> <p>{sort.col}</p>
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
              <th onClick={() => sortData("value")}>Volume</th>
              <th onClick={() => sortData("twentyFour")}>24h %</th>
              <th onClick={() => sortData("seven")}>7h %</th>
              <th onClick={() => sortData("floorPrice")}>Floor price</th>
              <th onClick={() => sortData("owners")}>Owners</th>
            </tr>
          </thead>
          <tbody>
            {data.map((seller, index) => {
              return <TopSellingNFTRow seller={seller} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopSellingNFTs;
