import { useEffect, useState } from "react";

import { ReactComponent as Blockchain } from "../../assets/icons/blockchain.svg";
import { ReactComponent as Category } from "../../assets/icons/category.svg";
import { ReactComponent as Collections } from "../../assets/icons/collections.svg";
import { ReactComponent as Eth } from "../../assets/icons/eth.svg";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

  const [sort, setSort] = useState({ col: "", order: null });

  const handleOrder = (col) => {
    switch (sort.order) {
      case "ASC":
        return setSort((prev) =>
          prev.col === col
            ? { col: col, order: "DESC" }
            : { col: col, order: "ASC" }
        );
      case "DESC":
        return setSort((prev) =>
          prev.col === col
            ? { col: col, order: null }
            : { col: col, order: "ASC" }
        );
      case null:
        return setSort((prev) =>
          prev.col === col
            ? { col: col, order: "ASC" }
            : { col: col, order: "ASC" }
        );
      default:
        break;
    }
  };

  const seperateSort = () => {
    const sortable = [...data];
    sortable.sort((a, b) => {
      if (sort.order === "ASC") return a[sort.col] - b[sort.col];
      else if (sort.order === "DESC") return b[sort.col] - a[sort.col];
    });
    return sort.order === null ? top_sellers : sortable;
  };

  useEffect(() => {
    setData(seperateSort());
  }, [sort]);

  const notSortedIconPack = () => {
    return (
      <div className={`center ${styles.icons}`}>
        <KeyboardArrowUpIcon />
        <KeyboardArrowDownIcon />
      </div>
    );
  };

  const renderSortIcon = (col) => {
    if (col === sort.col) {
      switch (sort.order) {
        case "ASC":
          return <KeyboardArrowUpIcon />;
        case "DESC":
          return <KeyboardArrowDownIcon />;
        case null:
          return notSortedIconPack();
        default:
          break;
      }
    } else {
      return notSortedIconPack();
    }
  };

  return (
    <section className={styles.container}>
      <h1>Top selling NFTs</h1>
      <section className={`center ${styles.tags}`}>
        {tags.map((tag) => (
          <StatTag data={tag} key={tag.text} />
        ))}
      </section>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.hiddenHeader}>ID</th>
              <th className={styles.hiddenHeader}>Avatar</th>
              <th className={styles.firstHeader}>Collections</th>
              <th onClick={() => handleOrder("value")}>
                <div className="center">Volume {renderSortIcon("value")}</div>
              </th>
              <th onClick={() => handleOrder("twentyFour")}>
                <div className="center">
                  24h % {renderSortIcon("twentyFour")}
                </div>
              </th>
              <th onClick={() => handleOrder("seven")}>
                <div className="center">7h % {renderSortIcon("seven")} </div>
              </th>
              <th onClick={() => handleOrder("floorPrice")}>
                <div className="center">
                  Floor price {renderSortIcon("floorPrice")}
                </div>
              </th>
              <th onClick={() => handleOrder("owners")}>
                <div className="center">Owners {renderSortIcon("owners")}</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((seller) => {
              return <TopSellingNFTRow seller={seller} index={seller.id} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopSellingNFTs;
