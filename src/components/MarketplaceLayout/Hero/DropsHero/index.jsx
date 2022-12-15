import styles from "./styles.module.scss";

const DropsHero = () => {
  return (
    <header className={styles.hero}>
      <article className="center">
        <p>Live Now</p>
        <h1>Invisible Friends</h1>
        <strong>Ends in: 18h 54m 29s</strong>
        <button>View Drop Details</button>
      </article>
    </header>
  );
};

export default DropsHero;
