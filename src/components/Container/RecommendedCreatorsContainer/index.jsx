import { ReactComponent as Eth } from "../../../assets/icons/eth.svg";
import UserTitle from "../../Typography/UserTitle";

import LikeTag from "../../Tag/LikeTag";

import styles from "./styles.module.scss";

const RecommendedCreatorsContainer = ({ nft }) => {
  return (
    <div className={`center ${styles.nftContainer}`}>
      <section key={nft.id}>
        <img src={nft.img} alt={nft.title} className={styles.nft} />
        <LikeTag value={nft.likes} />
        <article>
          <img src={nft.img} alt={nft.username} className={styles.userImg} />
          <UserTitle to={nft.address}>{nft.title}</UserTitle>
          <p>{`by ${nft.username}`}</p>
          <p className={`center ${styles.price}`}>
            <Eth /> <strong>{`${nft.price} Eth`}</strong>
          </p>
        </article>
      </section>
    </div>
  );
};

export default RecommendedCreatorsContainer;
