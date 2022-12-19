import { useEffect, useState } from "react";
import LoadMoreButton from "../../Button/LoadMoreButton";
import SectionTitle from "../../Typography/SectionTitle";
import DropContainer from "../../Container/DropContainer";
import TodayPickContainer from "../../Container/TodayPickContainer";
import { data, drops } from "../../../data/index";

import styles from "./styles.module.scss";

const LoadMoreWrapper = ({ title, mode }) => {
  const [showItemCount, setShowItemCount] = useState(4);
  // Select today's pick nfts
  const todaysNftsArr = data.filter((item) =>
    item["nfts"].some((x) => x.todays_pick === true)
  );
  // Select drops not previewed today
  const dropsForFuture = drops.filter((drop) => drop.today === false);

  const dataBasedOnMode =
    mode === "todays_pick" ? todaysNftsArr : dropsForFuture;

  const sliceData = (dt) => dt.slice(0, showItemCount);

  const [showData, setShowData] = useState(dataBasedOnMode);

  const counter = () => setShowItemCount((prev) => prev + 1);

  console.log(dataBasedOnMode);

  useEffect(() => setShowData(sliceData(dataBasedOnMode)), [showItemCount]);

  return (
    <section className="wrapper">
      <SectionTitle>{title}</SectionTitle>
      <div className={`center ${styles.container}`}>
        {showData.map((item) =>
          mode === "todays_pick" ? (
            <TodayPickContainer item={item} key={item.id} />
          ) : (
            <DropContainer mode="future" drop={item} key={item.id} />
          )
        )}
      </div>
      <LoadMoreButton
        onClick={counter}
        disabled={showItemCount === dataBasedOnMode.length}
      />
    </section>
  );
};

export default LoadMoreWrapper;
