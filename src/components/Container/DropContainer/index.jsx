import { ReactComponent as Eth } from "../../../assets/icons/eth.svg";
import LiveTag from "../../Tag/LiveTag";

import styles from "./styles.module.scss";

const DropContainer = ({ drop, mode, search = false }) => {
  const info =
    !search &&
    (mode === "today" ? (
      <LiveTag />
    ) : (
      <p className={styles.date}>{drop.date}</p>
    ));

  return (
    <div
      className={`center ${styles.container} ${styles[mode]} ${
        search ? styles.search : ""
      }`}
    >
      {info}
      <img src={drop.img} alt={drop.title} />
      <h2>{drop.title}</h2>
      <p className={`center ${styles.price}`}>
        <Eth /> <span>from</span> <strong>{`${drop.price} Eth`}</strong>
      </p>
      {/**
       *Show authors only in drop page
       */}
      {!search && (
        <div>
          {drop.owners.map((owner, index) => (
            <img
              src={owner.img}
              alt={owner.title}
              className={styles.userImg}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropContainer;
