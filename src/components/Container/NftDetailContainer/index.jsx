import { useParams } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import AddressTag from "../../Tag/AddressTag";
import PageTitle from "../../Typography/PageTitle";

import styles from "./styles.module.scss";

const NftDetailContainer = ({ nft }) => {
  const { address } = useParams();

  return (
    <section className={styles.container}>
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
