import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../Typography/SectionTitle";

import styles from "./styles.module.scss";

const CarouselWraper = ({ title, children }) => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(
    () => setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth),
    []
  );

  return (
    <section className="wrapper">
      <SectionTitle>{title}</SectionTitle>
      <motion.div
        className={styles.container}
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CarouselWraper;
