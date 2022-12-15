import { Link } from "react-router-dom";
import { ReactComponent as Eth } from "../../../assets/icons/eth.svg";

import LikeTag from "../../Tag/LikeTag";
import UserTitle from "../../Typography/UserTitle";

import styles from "./styles.module.scss";

const TodayPickContainer = ({ item }) => {
  return (
    <>
      {item.nfts.map((nft) => (
        <section className={`center ${styles.container}`}>
          <img className={styles.nft} src={nft.img} alt={nft.title} />
          <LikeTag value={nft.likes} />
          <UserTitle to={nft.address}>{nft.title}</UserTitle>
          <div className={`center ${styles.price}`}>
            <p>Price</p>
            <strong className="center">
              <Eth />
              {`${nft.price} Eth`}
            </strong>
          </div>
          <div className={`center ${styles.user}`}>
            <p>Author</p>
            <div className="center">
              <img
                src={item.user.img}
                alt={item.user.username}
                className={styles.userImg}
              />
              <Link to={`/user/${item.user.address}`}>
                {item.user.username}
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default TodayPickContainer;
