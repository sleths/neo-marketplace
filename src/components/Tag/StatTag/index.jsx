import styles from "./styles.module.scss";

const StatTag = ({ data }) => {
  return (
    <div className={`center ${styles.tag}`}>
      {data.icon}
      <strong>{data.text}</strong>
    </div>
  );
};

export default StatTag;
