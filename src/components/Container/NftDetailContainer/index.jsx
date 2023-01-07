import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import AddressTag from "../../Tag/AddressTag";
import PageTitle from "../../Typography/PageTitle";

import styles from "./styles.module.scss";

const NftDetailContainer = ({ nft }) => {
  const { address } = useParams();
  const [bid, setBid] = useState(nft.price * 1265);
  const [value, setValue] = useState("");
  const input = useRef();
  const hour = useRef();
  const minutes = useRef();
  const seconds = useRef();
  console.log(nft);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = e.target.bid.value
    if(value === "") return
    setBid(value);
    setValue("");
  };

  const handleChange = ({ target }) => setValue(target.value);

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
          <section className={`center ${styles.address}`}>
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
          <section className={`center ${styles.bid}`}>
            <div>
              <h6>Current bid</h6>
              <p>
                <strong>{`$${bid}`}</strong>
              </p>
            </div>
            <div>
              <h6>Auction ends in</h6>
              <p>
                <strong>15:32:10</strong>
              </p>
            </div>
          </section>

          <section>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="bid">Enter your bid</label>
              <input
                type="number"
                placeholder={`Minimum bid $${nft.price * 1265}`}
                id="bid"
                min={Math.round(nft.price * 1265)}
                onChange={handleChange}
                value={value}
                autoComplete="off"
              />
              <button type="submit">Submit your bid</button>
            </form>
          </section>
        </article>
      </div>
    </section>
  );
};

export default NftDetailContainer;
