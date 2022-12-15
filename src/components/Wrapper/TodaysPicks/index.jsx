import { useEffect, useState } from "react";
import { data } from "../../../data/index";
import LoadMoreButton from "../../Button/LoadMoreButton";

import TodayPickContainer from "../../Container/TodayPickContainer";
import SectionTitle from "../../Typography/SectionTitle";

import styles from "./styles.module.scss";

const TodaysPicks = () => {
  const [showItemCount, setShowItemCount] = useState(4);
  // Select today's pick nfts
  const todaysNftsArr = () => {
    const nfts = data.filter((item) =>
      item["nfts"].some((x) => x.todays_pick === true)
    );

    return nfts;
  };

  const sliceNftsArray = () => todaysNftsArr().slice(0, showItemCount);

  const [showData, setShowData] = useState(sliceNftsArray());

  const counter = () => setShowItemCount((prev) => prev + 1);

  useEffect(() => setShowData(sliceNftsArray()), [showItemCount]);

  return (
    <section className="wrapper">
      <SectionTitle>Today's picks</SectionTitle>
      <div className={`center ${styles.container}`}>
        {showData.map((item) => (
          <TodayPickContainer item={item} />
        ))}
      </div>
      <LoadMoreButton
        onClick={counter}
        disabled={showItemCount === todaysNftsArr().length}
      />
    </section>
  );
};

export default TodaysPicks;
