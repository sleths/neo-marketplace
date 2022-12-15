import { Link } from "react-router-dom";
import LiveTag from "../../../Tag/LiveTag";
import styles from "./styles.module.scss";

const DropsHero = () => {
  return (
    <header className={styles.hero}>
      <article className="center max-width">
        <LiveTag />
        <h1>Invisible Friends</h1>
        <strong className={styles.counter}>Ends in: 18h 54m 29s</strong>
        <Link to="#" className={styles.cta}>
          View Drop Details
        </Link>
      </article>
    </header>
  );
};

export default DropsHero;
