import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const HomePageHero = () => {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

  const handleChange = ({ target }) => setSearch(target.value);

  const navigateSearch = () => navigate(`search/${search}`);

  return (
    <header className={`center ${styles.hero}`}>
      <article className="center max-width">
        <h1>Discover, collect, and sell extraordinary NFTs</h1>
        <p>
          Our marketplace is the world's first and largest NFT market for
          independent creators worldwide.
        </p>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleChange}
            autoComplete="off"
          />
          <label
            htmlFor="search"
            className={search === "" ? styles.empty : styles.full}
          >
            Type to search
          </label>
          <button onClick={navigateSearch}>
            <SearchIcon />
          </button>
        </div>
      </article>
    </header>
  );
};

export default HomePageHero;
