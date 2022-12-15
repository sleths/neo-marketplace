import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";
import { data } from "../../../data/index";

import RecommendedCreatorsContainer from "../../Container/RecommendedCreatorsContainer";
import SectionTitle from "../../Typography/SectionTitle";

import styles from "./styles.module.scss";

const RecommendedCreators = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(
    () => setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth),
    []
  );

  return (
    <section className="wrapper">
      <SectionTitle>Recommended creators</SectionTitle>
      <motion.div
        className={styles.container}
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
          {data.map((item, index) => {
            return <RecommendedCreatorsContainer item={item} key={index} />;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RecommendedCreators;
