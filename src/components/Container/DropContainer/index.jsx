import LiveTag from "../../Tag/LiveTag";
import { ReactComponent as Eth } from "../../../assets/icons/eth.svg";
import styles from "./styles.module.scss";

const DropContainer = ({ drop, mode }) => {
  return (
    <div className={`center ${styles.container} ${styles[mode]}`}>
      {mode === "today" ? (
        <LiveTag />
      ) : (
        <p className={styles.date}>{drop.date}</p>
      )}
      <img src={drop.img} alt={drop.name} />
      <h2>{drop.name}</h2>
      <p className={`center ${styles.price}`}>
        <Eth /> <span>from</span> <strong>{`${drop.price} Eth`}</strong>
      </p>
      <div>
        {drop.owners.map((owner) => (
          <img src={owner.img} alt={owner.title} className={styles.userImg} />
        ))}
      </div>
    </div>
  );
};

export default DropContainer;
