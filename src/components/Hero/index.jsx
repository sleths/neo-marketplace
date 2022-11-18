import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";

const Hero = () => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => setSearch(target.value);

  return (
    <section className={`center ${styles.hero}`}>
      <h1>Discover, collect, and sell extraordinary NFTs</h1>
      <p>
        Our marketplace is the world's first and largest NFT market for
        independent creators worldwide
      </p>
      <div className={styles.inputContainer}>
        <label
          htmlFor="search"
          className={search === "" ? styles.empty : styles.full}
        >
          Type to search
        </label>
        <input type="text" id="search" value={search} onChange={handleChange} />
        <button>
          <SearchIcon />
        </button>
      </div>
    </section>
  );
};

export default Hero;
