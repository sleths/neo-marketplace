import styles from "./styles.module.scss";

const LoadMoreButton = ({ onClick, disabled }) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
