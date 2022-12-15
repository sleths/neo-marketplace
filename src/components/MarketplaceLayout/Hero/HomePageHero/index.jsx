import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";

const HomePageHero = () => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => setSearch(target.value);

  return (
    <header className={`center ${styles.hero}`}>
      <article className="center max-width">
        <h1>Discover, collect, and sell extraordinary NFTs</h1>
        <p>
          Our marketplace is the world's first and largest NFT market for
          independent creators worldwide.
        </p>
        <div className={styles.inputContainer}>
          <label
            htmlFor="search"
            className={search === "" ? styles.empty : styles.full}
          >
            Type to search
          </label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleChange}
          />
          <button>
            <SearchIcon />
          </button>
        </div>
      </article>
    </header>
  );
};

export default HomePageHero;
