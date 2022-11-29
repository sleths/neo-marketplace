import { Link } from "react-router-dom";
import { data } from "../../data/index";
import { ReactComponent as Eth } from "../../assets/icons/eth.svg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import SectionTitle from "../Typography/SectionTitle";

import styles from "./styles.module.scss";

const RecommendedCreatorsContainer = ({ item }) => {
  return (
    <div className={`center ${styles.nftContainer}`}>
      {item.nfts.map((nft) => (
        <>
          <img src={nft.img} alt={nft.title} className={styles.nft} />
          <div className={`center ${styles.like}`}>
            <FavoriteBorderIcon />
            <p>{nft.likes}</p>
          </div>
          <article>
            <img
              src={item.user.img}
              alt={item.user.username}
              className={styles.userImg}
            />
            <Link
              to={`/${nft.title.trim().replaceAll(" ", "-").toLowerCase()}`}
              className={styles.title}
            >
              {nft.title}
            </Link>
            <p>{`by ${item.user.username}`}</p>
            <p className={`center ${styles.price}`}>
              <Eth /> <strong>{`${nft.price} Eth`}</strong>
            </p>
          </article>
        </>
      ))}
    </div>
  );
};

const RecommendedCreators = () => {
  return (
    <section className={styles.wrapper}>
      <SectionTitle>Recommended creators</SectionTitle>
      <div className={styles.container}>
        {data.map((item, index) => {
          return <RecommendedCreatorsContainer item={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default RecommendedCreators;
