import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import AddressTag from "../../Tag/AddressTag";
import PageTitle from "../../Typography/PageTitle";

import styles from "./styles.module.scss";

const NftDetailContainer = ({ nft }) => {
  const { address } = useParams();

  const price = nft.price || nft.floorPrice;

  const [bid, setBid] = useState(price * 1265);
  const [value, setValue] = useState("");

  const countdownSecs = 54500;

  const formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor((time % 3600) % 60);

    if (hours <= 10) hours = "0" + hours;
    if (minutes <= 10) minutes = "0" + minutes;
    if (seconds <= 10) seconds = "0" + seconds;

    return `${hours} : ${minutes} : ${seconds}`;
  };

  const timer = useRef();

  const [countdown, setCountdown] = useState(countdownSecs);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = e.target.bid.value;
    if (value === "") return;
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
          <PageTitle>{nft.title || nft.name}</PageTitle>
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
                <strong>{formatTime(countdown)}</strong>
              </p>
            </div>
          </section>

          <section>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="bid">Enter your bid</label>
              <input
                type="number"
                placeholder={`Minimum bid $${price * 1265}`}
                id="bid"
                min={Math.round(price * 1265)}
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
