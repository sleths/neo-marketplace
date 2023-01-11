import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { switchRender } from "../../utils/helpers";
import LikeTag from "../../components/Tag/LikeTag";
import UserTitle from "../../components/Typography/UserTitle";
import UserHero from "../../components/MarketplaceLayout/Hero/UserHero";
import Layout from "../../components/MarketplaceLayout/Layout";
import { data } from "../../data/index";
import { ReactComponent as Eth } from "../../assets/icons/eth.svg";
import styles from "./styles.module.scss";

const UserPage = () => {
  const { address } = useParams();

  const [activeKey, setActiveKey] = useState("all");

  const [selectiveNFTs, setSelectiveNFTs] = useState();

  const user = data
    .map((item) => item.user)
    .find((item) => item.address === address);
  const tags = user.nfts.map((x) => x.tags).flat(1);

  const uniqueTags = [...new Set(tags)];

  const handleTagSelect = ({ target }) =>
    setActiveKey(target.innerText.toLowerCase());

  /* console.log(user.nfts.filter((nft) => nft.tags.includes(activeKey))); */

  useEffect(() => console.log(selectiveNFTs), [selectiveNFTs]);

  useEffect(
    () =>
      setSelectiveNFTs(user.nfts.filter((nft) => nft.tags.includes(activeKey))),
    [activeKey]
  );

  const Nft = ({ nft }) => {
    return (
      <section key={nft.id} className={`center ${styles.nft}`}>
        <img src={nft.img} alt={nft.title} className={styles.nft} />
        <LikeTag value={nft.likes} />
        <article>
          <UserTitle to={nft.address}>{nft.title}</UserTitle>
          <p>{`by ${user.username}`}</p>
          <p className={`center ${styles.price}`}>
            <Eth /> <strong>{`${nft.price} Eth`}</strong>
          </p>
        </article>
      </section>
    );
  };

  const children = (
    <section style={{ padding: "0 24px" }}>
      <UserHero user={user} />
      <div className={`center ${styles.tagContainer}`}>
        <p
          className={`${styles.tag} ${
            activeKey === "all" ? styles.active : ""
          }`}
          onClick={handleTagSelect}
        >
          All
        </p>
        {uniqueTags.map((tag) => (
          <p
            key={tag}
            onClick={handleTagSelect}
            className={`${styles.tag} ${
              activeKey === tag ? styles.active : ""
            }`}
          >
            {tag}
          </p>
        ))}
      </div>
      <div className={`center ${styles.nftContainer}`}>
        {activeKey !== "all"
          ? selectiveNFTs.map((nft) => <Nft nft={nft} />)
          : user.nfts.map((nft) => <Nft nft={nft} />)}
      </div>
    </section>
  );

  return <Layout>{switchRender(user, children)}</Layout>;
};

export default UserPage;
