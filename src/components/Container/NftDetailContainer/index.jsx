import { useParams } from "react-router-dom";
import { data } from "../../../data/index";
import styles from "./styles.module.scss";

const NftDetailContainer = () => {
  const { address } = useParams();
  const nft = data
    .map((item) => item.user.nfts.find((x) => x.address === address))
    .find((nft) => nft !== undefined);

  return (
    <section className={styles.container}>
      {/* <PageTitle>Explore NFTs</PageTitle> */}
      <div className="center">
        <img src={nft.img} alt={nft.title} className={styles.nftImg} />
        <article>
          
        </article>
      </div>
    </section>
  );
};

export default NftDetailContainer;
