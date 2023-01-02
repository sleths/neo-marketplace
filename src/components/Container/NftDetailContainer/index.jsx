import { useParams } from "react-router-dom";
import { data } from "../../../data/index";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import AddressTag from "../../Tag/AddressTag";
import PageTitle from "../../Typography/PageTitle";

import styles from "./styles.module.scss";
import { useState } from "react";

const NftDetailContainer = () => {
  const { address } = useParams();
  const nft = data
    .map((item) => item.user.nfts.find((x) => x.address === address))
    .find((nft) => nft !== undefined);

  const [bid, setBid] = useState(nft.price);

  console.log(nft);

  return (
    <section className={styles.container}>
      {/* <PageTitle>Explore NFTs</PageTitle> */}
      <div className="center">
        <img src={nft.img} alt={nft.title} className={styles.nftImg} />
        <article className="center">
          <p className={`center ${styles.visibility}`}>
            <RemoveRedEyeOutlinedIcon />
            <strong> {`${124 + nft.id}k`}</strong>
          </p>
          <PageTitle>{nft.title}</PageTitle>
          <p>{nft.description}</p>
          <section className="center">
            <div>
              <p className={styles.subTitle}>Creator</p>
              <AddressTag address={address} />
            </div>
            <div>
              <p className={styles.subTitle}>Blockchain</p>
              <p>
                <strong>Etherium</strong>
              </p>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default NftDetailContainer;
